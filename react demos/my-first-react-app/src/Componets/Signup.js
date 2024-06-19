import { Link } from "react-router-dom";

const Signup = () => {
    var name = "";
    var email = ""
    var password ="";
    var confirmPassword ="";
    
    function handleChange(event){
        if(event.target.name == "name"){
            name = event.target.value
            console.log(name)
        }
        if(event.target.name == "username")
        {
            email = event.target.value
            console.log(email)
        }
        
        if(event.target.name == "password")
        {
            password = event.target.value
            console.log(password)
        }
        
        if(event.target.name == "confirm_password")
        {
            confirmPassword = event.target.value
            console.log(confirmPassword)
        }
       
        
    }

    return ( <div className="container p-5">
    <div className="row bg-light shadow p-4">
        <div className="offset-1 col-5"></div>
        <div className="col border p-4">
            <h4 className="text-center">Welcome User Create Account</h4>
            <form>
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