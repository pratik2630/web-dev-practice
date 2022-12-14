import { useState } from "react"

function Card() {
    return (
        <>
        <h1>Hello</h1>
        </>
    )
} 


var count = 1;

function Increment(){
    var [ myvalue , myf] = useState(1);   
    //console.log(mys)

    function increment(){
        myf(myvalue+1)
        // count ++;
    }

    return <div>
        <h1>{myvalue}</h1>
        <button onClick={increment}>click</button>
    </div>

}




export {Card , Increment }