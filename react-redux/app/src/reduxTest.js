/**
 * Created by wurui on 2017/7/2.
 */
import React from 'react';
import {reducerStore,store} from '../core/boot';
import '../main.css';
import {Model} from './model'


reducerStore.createStores("MySecondComp",{
    //班级花名册列表
    classmates:["俞小锋","许文渲","刘雪峰","聊天器"]
},{
    delete(state,action){
        return state.deleteIn(["classmates",action.index]);
    },
    update(state,action){
        return state.updateIn(["classmates",action.index],function (item) {
            console.log("item",item);
            return action.content
        })
    }
});


var mapDispatchToPropss = (dispatch)=>{
    return{
        deleteName(index){
            dispatch({type:"delete",index:index})
        },
        modify(index,content){
            //console.log(index,content);
            dispatch({type:"update",index:index,content:content})
        }
    }
};


@store(mapDispatchToPropss)
class MySecondComp extends React.Component{
    state = {
        flag:false,//控制弹窗是否显示
        index:0,//记录更改内容的位置
        name:"",//更改内容的名称
    };

    componentWillMount(){
        this.updtateContent = "";
    }

	/**
     * 保存并更新内容
     * @param index
     */
    update(index){
        this.setState({flag:false});
        if(this.updtateContent == "") return;
        this.props.modify(index,this.updtateContent);

    };

	/**
     * 显示弹出框
     * @param index
     */
    showModel(index,name){
        this.updtateContent = name;
        this.setState({
            flag:true,
            index:index,
            name:name,
        });
    };


	/**
     * 关闭弹窗
     */
    closeModel(){
        this.setState({flag:false});
    }

	/**
     * 时时存储内容的改变
     * @param event
     */
    saveContent(event){
        this.setState({name:event.target.value});
        this.updtateContent = event.target.value?event.target.value:"（空）";
    };

    render(){
        var {classmates} = this.props.data.toJS();
        var that = this;
        let {flag,name,index} = this.state;
        return(
            <div className="mysecondcomp">
                <div className="title">班级花名册：</div>
                <div className="box">
                    {classmates.map(function (item,index) {
                        return(
                            <div className="msc-wraper" key={index}>
                                <div className="item">{item}</div>
                                <span onClick={that.props.deleteName.bind(that,index)}>删除</span>
                                <span onClick={that.showModel.bind(that,index,item)}>修改</span>
                            </div>
                        )
                    })}
                </div>
                <Model isShow={flag}>
                    <input placeholder={name} value={name} onChange={this.saveContent.bind(this)} className="m_input" type="text"/>
                    <button className={"btn"} onClick={this.update.bind(this,index)}>保存</button>
                    <button className={"btns"} onClick={this.closeModel.bind(this,index)}>取消</button>
                </Model>
            </div>
        )
    }
}

export {MySecondComp}