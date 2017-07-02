/**
 * Created by wurui on 2017/6/16.
 */

import React from "react";
import store from './store'

@store({name:"yubinghua"})
class SecondComponent extends React.Component{
    constructor(){
        super();
        this.state = {index:1,count:2}
    }

    render(){
        console.log("this.props",this.props);
        return <div>
            <div>{this.props.name} 毕业于</div>
            {this.props.school}
            {this.props.address}
            {this.props.phone}
            <div>hello git</div>

        </div>
    }
}


export default SecondComponent;