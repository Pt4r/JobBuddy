'use strict';

const e=React.createElement;

class InputElement extends React.Component{
    render(){
        return e(
             'input',null,null,{type:text});
            
        
    }
}

const InputElement=document.querySelector("#row1-input");
ReactDOM.render(<InputElement/>,InputElement);