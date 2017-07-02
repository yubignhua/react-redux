/**
 * Created by wurui on 2017/6/22.
 */

import React from 'react';
import {combineReducers,createStore} from 'react';
import { connect } from 'react-redux';




class RootRedux{
    constructor(){
        this.arrFun = [];
    }
    createStore(callback){
        if(typeof callback == "function"){
            this.arrFun.push();
            this.mConbineReducer = combineReducers()
        }
    }
    createRedux(){
        // Store
        const store = createStore(reducer);
    }


}

