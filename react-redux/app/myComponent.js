import React from 'react';
import ReactDOM from 'react-dom';
class MyComponent extends React.Component {

  componentWillMount(){
    console.log("123",this.props)
  }
  render() {
    console.log(this.props.color)
    return (
      <div className="index">
        <p>{this.props.text}</p>
          <div>nihao</div>
          <div onClick={this.props.changeColor.bind(this,!this.props.color)} style={{backgroundColor:this.props.color?"red":"blue"}}>变颜色</div>
          <input defaultValue={this.props.name} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default MyComponent;
