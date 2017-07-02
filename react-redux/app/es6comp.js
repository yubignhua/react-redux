/**
 * Created by wurui on 2017/6/14.
 */
import React,{Component} from 'react';

function store(map) {
    return function (target) {
        Object.assign(target.prototype,map)
    }
}


var aMaps = {
    uId:2134234,
};


@store(aMaps)
class NewComponent extends React.Component{

    componentWillMount(){
       console.log(this.uId)
    }

    static defaulProps = {
        data:[2]
    };

    state = {
        name:"yubh"
    };

    aMap = {
        a:23432234234
    };

    handClick = name => {
        this.setState({name:name})
    };


    render(){
        return <div onClick={this.handClick.bind(this,"wuwu")}>
            {this.state.name}
            {this.aMap.a}
        </div>
    }
}

var arr = ["red","blue","green"];
function sArr(array){
    return function(target){
        target.prototype.arr = array;
    }
}

@sArr(arr)
class FirstComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            color:false,
            i:0
        };
        //this.changeColor = this.changeColor.bind(this);
    }

    static defaultProps = {
        data:[1,2,3,43]
    };


    componentWillMount(){
        this.changePic();
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    changePic(){
        this.index = 0;
        this.timer = setInterval(() => {
            this.setState({
                i:++this.index
            })
        },2000)
    }

    changeColor = () => {
        this.setState({
            color:!this.state.color
        });
    };

    render(){
        var colors = this.state.color?"red":"black";
        var mArr = this.arr;
        var index = this.state.i;
        return (
            <div>
                <div onClick={this.changeColor} style={{color:colors}}>
                    FirstComponent
                    {this.props.data.map(function (item,i) {
                        return <div key={i}>{item}</div>

                    })}
                </div>
                <div className="move" key={index%mArr.length} style={{backgroundColor:mArr[index%mArr.length]}}></div>
            </div>

        )
    }
}

    /*FirstComponent.defaultProps = {
        data:["ybh",'ww']
    };*/





var dec = (...values)=>{
    return (Target) => {
       return class extends React.Component{
           constructor(){
               super();
                   this.state = {
                   index:false,
                   myName:"park"
               };
               this.prop = {
                   hot:"玉米",
                   cold:"凉皮",
                   drink:values[0].name
               }
           }
           componentWillMount(){
               this.timer = setTimeout(() => {
                   this.setState({
                       index:true
                   })
               },2000)
           }
           componentWillUnmount(){
               clearTimeout(this.timer)
           }
           render(){
               return <Target {...this.prop} {...this.state}/>
           }
       }
    }
};



export default dec;








/*
console.log(...[1,2,3]);


 function foo(array,...items){
     array.push(...items);
     return array;
 }
 var a= [8,9,7];
console.log(foo(a,1,2,3));


var b=[1,2,3,4,5,...a];
console.log(b);*/

/*var aa = 5;
function f1(){
    console.log(this.aa)
}
var oo = {
  aa:6,
    cc:function(){
      f1();
    },
    dd:f1
};
oo.cc();
var ss = oo.dd();*/




/*


var color = "blue";
function changeColor(){

    if(color == "blue"){
        color = "red";
    }else{
        color = "blue";
    }
    return color;
}
console.log(changeColor());
console.log(color);
console.log(changeColor());


function foo1() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

var id = 21;

foo1.call({ id: 42 });


var oo = {
    aa:6,
    cc:function(){
        console.log(123);
    },
    dd:789
};


const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return obj::hasOwnProperty(key);
}
console.log(hasOwn(oo,oo.cc));

const set = new Set([1,2,3,4,5,6,7,8,9,7]);
console.log(set);

function Test(a){
    this.x = a;
}

var test = new Test("sfks");

console.log("------",test.x);

*/


/*
function Test(name,id){
    this.name = name;
    this.id = id;
    this.listenerMap = {};
    this.addlistenFun = function (name,func) {
        if(name && func) this.listenerMap[name] = func;
    }

}

Test.prototype.giveName = function () {
    console.log(this.name);
};

Test.prototype.fire = function (name) {
    if(this.listenerMap[name]){
        this.listenerMap[name]();
    }
};


var test = new Test("武瑞",1554252);

console.log(test.name);

Test.address = "ajksfls";
console.log("Test",{test:Test});


console.log("test",test);*/


class Test{
    constructor(name,id){
        this.name = name;
        this.id = id;
        this.listenerMap = {name:456};
        this.addlistenFun = function (name,func) {
            if(name && func) this.listenerMap[name] = func;
        }
    }

    giveName(){
        console.log("this.name",this.name);
    }


    add(){
        this.addlistenFun("giveName",this.giveName.bind(this))
    }

    fire(name){
        if(this.listenerMap[name]){
            this.listenerMap[name]();
        }
    }
}





var abc = {
    name:"yuxiaofeng"
};


class Person{
    constructor(){
        this.name = "yubh"
    }

    sayName(){
        var test = new Test("武瑞",1554252);
        test.add();
        test.fire("giveName");
    }


}

var person = new Person();
person.sayName();




