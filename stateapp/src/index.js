import React from 'react';
import  ReactDOM  from 'react-dom';
import { Card } from './components/Card';

function colorChange(){
  console.log("hii")
  document.getElementById("root").style.color = "red";
}
ReactDOM.render(
  <div>
    <Card />
    <button onClick={colorChange}> click me</button>
  </div>,
  document.getElementById("root")
)