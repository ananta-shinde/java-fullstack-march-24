import { Link } from "react-router-dom";

const Login = () => {
    return (  <>
         <div className="container p-5">
            <div className="row bg-light shadow p-4">
                <div className="offset-1 col-5"></div>
                <div className="col border p-4">
                    <h4 className="text-center">Welcome User Please login</h4>
                    <form>
                        <div className="form-group mt-4">
                            
                            <input type="text" className="form-control" placeholder="Username/email"/>
                        </div>
                        <div className="form-group mt-4">
                           
                            <input type="password" className="form-control" placeholder="Password"/>
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

