/**
 * Created by wurui on 2017/6/30.
 */
import React from 'react';
import { createStore } from 'redux'
import { Provider,connect } from 'react-redux'
import immutable from 'immutable';


class ReduxReducer{

    constructor(){
        this.mHandlerState = {}
    }

    handler(name,func,state,action){
        //console.log("交给回调处理的state:::",state.toJS());
        return func(state.get(name) || state,action);
    };

    handleState = (name,handlers)=>{
        var mhandlerArr = Object.keys(handlers);
        console.log("----mhandlerArr-----",mhandlerArr)
        for(let i = 0;i<mhandlerArr.length;i++){
            var mItemName = mhandlerArr[i];
            this.mHandlerState[mItemName] = this.handler.bind(this,name,handlers[mItemName]);
        }
        console.log("this.mHandlerState",this.mHandlerState)
    };



    reducers(state = immutable.fromJS({}), action) {
        switch (action.type) {
            case 'createStore':
                console.warn("---------创建createStore--------------",action.name);
                this.handleState(action.name,action.handler);
                state = state.set(action.name,action.store);
                return state.get(action.name);break;
            case 'deleteStore':
                return state.delete(action.type);break;
            default:
                let mfun = this.mHandlerState[action.type];
                return mfun && mfun(state,action) || state.get(action.name);
        }
    }

    createStores(name,store,handler){
        this.mStore = createStore(this.reducers.bind(this));
        this.mStore.dispatch({type:"createStore",name:name,store:immutable.fromJS(store),handler:handler})
    }

}

var reducerStore = new ReduxReducer();

var store = (mapActionToRedeux)=>{
    return (Target)=>{
       // console.log("tagertt",Target.name)
       var App = connect(
            // Map Redux state to component props
            (state)=> {
                //console.log("-------------4",state.toJS())
                return {data:state}},
            // Map Redux actions to component props
             mapActionToRedeux,
        )(Target);
        return class extends React.Component{
            //为组件添加逻辑处理
            componentWillMount(){}
            render(){
                return(
                    <Provider store={reducerStore.mStore}>
                        <App/>
                    </Provider>)
            }
        }
    }
};


export {store,reducerStore}