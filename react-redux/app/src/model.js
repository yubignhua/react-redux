/**
 * Created by wurui on 2017/7/2.
 */
import React from 'react';
import '../main.css';

class Model extends React.Component{
    render(){
        var {isShow} = this.props;
        return(
            <div className={"model "+(isShow?"trans":"")}>
                <div className="model_content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export {Model}