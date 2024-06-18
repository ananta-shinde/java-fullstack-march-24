import { Link } from "react-router-dom";

const Signup = () => {
    return ( <div className="container p-5">
    <div className="row bg-light shadow p-4">
        <div className="offset-1 col-5"></div>
        <div className="col border p-4">
            <h4 className="text-center">Welcome User Create Account</h4>
            <form>
                <div className="form-group mt-4">
                    
                    <input type="text" className="form-control" placeholder="Full Name"/>
                </div>
                <div className="form-group mt-4">
                    
                    <input type="text" className="form-control" placeholder="Username/email"/>
                </div>
                <div className="form-group mt-4">
                   
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="form-group mt-4">
                   
                    <input type="password" className="form-control" placeholder="Confirm Password"/>
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