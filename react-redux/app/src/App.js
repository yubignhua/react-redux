import React from 'react';
import {reducerStore,store} from '../core/boot'




reducerStore.createStores("MyComponent",{
    text: '你好，欢迎您的到来',
    name: 'yubh',
    color: false,
},{
    change(state,action){
        var state = state.set("text", "你好," + action.payload);
        return state.set("name", action.payload);
    },
    colors(state,action){
        console.log("callback state------------",state.toJS());
        return state.set("color",action.color)
    },
});

var mapDispatchToProps = (dispatch)=> {
    return {
        onChange: (e) => {
            dispatch({
                type: 'change',
                payload: e.target.value
            })
        },
        changeColor: (color)=> {
            console.log("dipatch color",color)
            dispatch({
                type: "colors",
                color: color,
            })
        }
    }
};


@store(mapDispatchToProps)
class MyComponent extends React.Component {
    render() {
        console.log("this.props.data",this.props.data.toJS());
        var {text,color,name} = this.props.data.toJS();
        return (
            <div className="index">
                <p>{text}</p>
                <div>nihao</div>
                <div onClick={this.props.changeColor.bind(this,!color)} style={{backgroundColor:color?"red":"yellow"}}>变颜色</div>
                <input defaultValue={name} onChange={this.props.onChange} />
            </div>
        );
    }
}

export default MyComponent;














