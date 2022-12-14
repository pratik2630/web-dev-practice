import React,{ useState} from 'react';
import  ReactDOM  from 'react-dom';
import { Card , Increment  } from './components/Card';


// To change text color
// function colorChange(){
  
//   console.log("hii")
//   document.getElementById("root").style.color = "red";
// }

ReactDOM.render(
  <div>
    <Card />
    <Increment/>
    
    {/* <button onClick={colorChange}> click me</button> */}
  </div>,
  document.getElementById("root")
)