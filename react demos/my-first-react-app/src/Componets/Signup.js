import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    // var name = "";
    // var email = ""
    // var password ="";
    // var confirmPassword ="";

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    // var error = ""
    const [error, setError] = useState("")

    function handleSubmit(event)
    {
        event.preventDefault()
        if(name == "" || email==""|| password=="" || confirmPassword=="" )
        {
            setError("All fields are compulsary...")
        }
        else if(password != confirmPassword){
            setError("Password Mismatch")
        }
        else{
            setError("")
            fetch("http://localhost:5000/users",{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    name,email,password
                })
            }).then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        }
        console.log("form submitted")
    }
    
    function handleChange(event){
        if(event.target.name == "name"){ 
            setName(event.target.value)
            console.log(name)
        }
        if(event.target.name == "username")
        {
            setEmail(event.target.value)
            console.log(email)
        }
        
        if(event.target.name == "password")
        {
            setPassword(event.target.value)
            console.log(password)
        }
        
        if(event.target.name == "confirm_password")
        {
            setConfirmPassword(event.target.value)
            console.log(confirmPassword)
        } 
    }

    return ( <div className="container p-5">
    <div className="row bg-light shadow p-4">
        <div className="offset-1 col-5"></div>
        <div className="col border p-4">
            <h4 className="text-center">Welcome User Create Account</h4>
            <form onSubmit={handleSubmit}>
                {error != "" && <div className="alert alert-danger">{error}</div>}
                <div className="form-group mt-4"> 
                    <input type="text" className="form-control" placeholder="Full Name" name="name" onChange={handleChange}/>
                </div>
                <div className="form-group mt-4"> 
                    <input type="text" className="form-control" placeholder="Username/email"name="username" onChange={handleChange}/>
                </div>
                <div className="form-group mt-4">
                    <input type="password" className="form-control" placeholder="Password" name="password" onChange={handleChange}/>
                </div>
                <div className="form-group mt-4">
                    <input type="password" className="form-control" placeholder="Confirm Password" name="confirm_password" onChange={handleChange}/>
                </div>
                <div className="form-group mt-4">
                    <button className="btn btn-dark" type="submit">Signup</button>
                </div>
            </form>
            <div className="mt-4">
                        <p>Already have account?<Link to="/login">Sing in here</Link></p>
                    </div>
        </div>
    </div>
 </div>);
}
 
export default Signup;