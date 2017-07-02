/**
 * Created by wurui on 2017/6/17.
 */


import React from "react";
import dec from './es6comp';
import {createStore} from "redux";

@dec({name:"水"})
class ThirdComponent extends React.Component{
    constructor(){
        super();
    }
    giveName(){
        var name = this.props.myName;
        return`apple的ceo是${name}`;
    }
    render(){
        console.log(this.props);
        var color = this.props.index?"red":"blue";
        return <div className="mybox move" style={{backgroundColor:color}}>
            {this.props.drink}{this.props.cold}
            <div>{this.giveName()}</div>
            </div>
    }
}


    /*
    export default ThirdComponent;

    const Counter =({value}) => (
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>

    );
    const reducer = (state=0,action)=>{
      switch(action.type){
          case "increment":
              return state+1;
          case "decrement":
              return state-1;
          default:
              return state
      }
    };
    const store = createStore(reducer);
    const render = ()=>{
        ReactDOM.reder(
            <Counter
                value={store.getState}
                onIncrement={store.dispatch({type:increment})}
                onDecrement={store.dispatch({type:decrement})}
            />,
        document.body.appendChild(document.createElement('div'))
        )
    };
    render();
    store.subscribe(render);*/
