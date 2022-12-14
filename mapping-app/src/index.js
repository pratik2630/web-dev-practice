import React from "react";
import  ReactDOM  from "react-dom";
import { Card } from "./components/card";
import mydata from "./db";

//  Manual function instead of annonymous function

// function createCard(data){
//     return (
//           <Card 
//                 status={data.status} 
//                 terminal= {data.terminal} 
//                 logoimg= {data.logoimg}  
//             />
//     )
// }

ReactDOM.render(
   <>


 {/* annonymous function */}
   {mydata.map ((data)=> {
      return (
        <Card 
    status={data.status} 
    terminal= {data.terminal} 
    logoimg= {data.logoimg}  
    />
    )
   })}
   
{/* 
   manual function example

   {mydata.map (createCard)}
 */}


   {/* <Card 
    status={mydata[0].status} 
    terminal= {mydata[0].terminal} 
    logoimg= {mydata[0].logoimg}  
    />

   <Card 
   status= {mydata[1].status} 
   terminal={mydata[1].terminal} 
   logoimg={mydata[1].logoimg} 
   />

   <Card 
   status={mydata[2].status} 
   terminal={mydata[2].terminal} 
   logoimg={mydata[2].logoimg} 
   /> */}
   </>

,document.getElementById("root"))