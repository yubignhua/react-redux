/**
 * Created by wurui on 2017/7/2.
 */
import React from 'react';
import {reducerStore,store} from './boot';
import './main.css';
import {Model} from './model'


reducerStore.createStores("MySecondComp",{
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
            console.log(index,content);
            dispatch({type:"update",index:index,content:content})
        }
    }
};


@store(mapDispatchToPropss)
class MySecondComp extends React.Component{


    state = {
        flag:false
    };

    componentWillMount(){
        this.updtateContent = "";
    }

    update(){
        this.props.modify(this.state.index,this.updtateContent);
        this.setState({
            flag:false
        })
    };

	/**
     * 显示弹出框
     * @param index
     */
    showModel(index){
        this.setState({
            flag:true,
            index:index
        });
    };

    giveName(){
        alert("youname")
    }

    saveContent(event){
        console.log(event.target.value);
        this.updtateContent = event.target.value;
    };

    render(){
        console.log(this.props.data.toJS());
        var {classmates} = this.props.data.toJS();
        var that = this;
        return(
            <div className="mysecondcomp">
                <div>花名册：</div>
                <div>
                    {classmates.map(function (item,index) {
                        return <div className="msc-wraper" key={index}>{item}
                            <span onClick={that.props.deleteName.bind(that,index)}>删除</span>
                            <span onClick={that.showModel.bind(that,index)}>修改</span>
                        </div>
                    })}
                </div>
                <Model isShow={this.state.flag}>
                    <input placeholder="请填写您的修改" onChange={this.saveContent.bind(this)} className="m_input" type="text"/>
                    <button onClick={this.update.bind(this)}>保存</button>
                </Model>
            </div>
        )
    }
}

export {MySecondComp}