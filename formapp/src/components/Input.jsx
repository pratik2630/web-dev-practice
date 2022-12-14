import { useState } from "react";
 let myn;
 
function FormInput(props){

    let [myn , setName] = useState("name")

    function NameChange(events){
        console.log(events.target.value);
        myn = events.target.value;
        setName(myn)
    }
    return (
    <>  
    hey {myn}
        <> {props.Input_text} </>
    <input 
        type={props.mytype} 
        name = {props.myname} 
        placeholder={props.myplaceholder}
        onChange={NameChange}
     />
    </>)
}

export default FormInput;
export { myn };