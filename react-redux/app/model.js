/**
 * Created by wurui on 2017/7/2.
 */
import React from 'react';
import './main.css';

class Model extends React.Component{
    render(){
        return(
            <div className="model" style={{display:this.props.isShow?"block":"none"}}>
                <div className="model_content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export {Model}