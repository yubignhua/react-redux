/**
 * Created by wurui on 2017/6/16.
 */

/**
 * @store 高阶组件的定义
 */
import React from 'react';


var store = (...args)=>{
    return (Target)=>{
        return class extends React.Component{
            constructor(){
                super();
                this.state = {
                    age:123,
                    school:"hafu",
                    name:args[0].name
                };
                this.newProps = {
                    phone:18612452753,
                    address:"山东诸城"
                }
            }
            //为组件添加逻辑处理
            componentWillMount(){
                var that = this;
                setTimeout(function () {
                    that.setState({
                        school:"我是谁"
                    })
                },1000)
            }
            render(){
                console.log("this.props",this.props);
                return <Target {...this.state} {...this.newProps}/>
            }
        }
    }
};
export default store;