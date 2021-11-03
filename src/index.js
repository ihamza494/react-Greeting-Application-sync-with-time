import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




var time = new Date()
var hour = time.getHours()
let greeting = ''
const cssStyle = {}

if( hour >= 3 && hour < 12){
  greeting = 'Good Morning';
  cssStyle.color = "Green";
}
else if( hour >= 12 && hour < 6){
  greeting = 'Good Afternoon';
  cssStyle.color = "Orange";
}
else{
  greeting= ' Good night';
  cssStyle.color = "Black";
}

function Greetingbox(props){
  return(
    <div className='greeting__box'>
        <h3> Hi Sir,</h3>
        <p style={cssStyle}> {props.greet}</p> 
    </div>
  );
}


ReactDOM.render(<Greetingbox x ={hour} greet={greeting} />, document.getElementById('root'))
