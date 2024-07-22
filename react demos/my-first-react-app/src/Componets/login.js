import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] =  useState("")
    const navigate = useNavigate()
    const hadnleSubmit = (e)=>{
        e.preventDefault()
        fetch("http://localhost:5000/users?email="+email)
        .then(res=>res.json())
        .then(data=>{
             if(data.length == 0)
             {
                 setError("User does not exists")
             }else{
                if(data[0].password == password){
                    localStorage.setItem("user",JSON.stringify(data[0]))
                    navigate("/")
                }
                else{
                    setError("Invalid creds")
                }
             }
        })
    }
    return (  <>
         <div className="container p-5">
            <div className="row bg-light shadow p-4">
                <div className="offset-1 col-5"></div>
                <div className="col border p-4">
                    <h4 className="text-center">Welcome User Please login</h4>
                    <form onSubmit={hadnleSubmit}>
                        {error != "" && <div className="alert alert-danger">{error}</div>}
                        <div className="form-group mt-4">
                            <input type="text" className="form-control" placeholder="Username/email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="form-group mt-4">

                            <input type="password" className="form-control" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                            <Link className="mt-2">forgot password?</Link>
                        </div>
                        <div className="form-group mt-4">
                            
                            <button className="btn btn-dark" type="submit">Login</button>
                        </div>
                    </form>

                    <div className="mt-4">
                        <p>Do not have account?<Link to="/signup">Signup here</Link></p>
                    </div>
                </div>
            </div>
         </div>
        </> );
}
 
export default Login;

