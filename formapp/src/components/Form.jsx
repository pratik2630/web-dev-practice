import FormInput from "./Input"
function MyForm(){
    return (
    
    <form>
    <FormInput Input_text="Name" mytype="text" myname = "n" myplaceholder="Enter name" />
    <br />
    <FormInput Input_text="Number" mytype="text" myname = "p" myplaceholder="Enter phone" />
    <br />
    <FormInput Input_text="password" mytype="password" myname= "passwd" myplaceholder="Enter password" />
    <br />
    <input type="submit" />
</form> )
}

export default MyForm;