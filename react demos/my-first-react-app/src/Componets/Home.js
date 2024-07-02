import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [user,setuser] = useState(null);
    
    useEffect(()=>{
        setuser(JSON.parse(localStorage.getItem("user")))
        console.log(user)
    },[])
    
    const handleLogout = ()=>{
        localStorage.removeItem("user")
        setuser(null)

    }

    return ( <>
    <h1>Home</h1>
    <div>
      {user && <p>{user.name}</p>}
      {user && <button className="btn btn-dark" onClick={handleLogout}>Logout</button>}
      {!user && <Link to="/login" className="btn btn-dark">sign in</Link>}
    </div>
    </> );
}
 
export default Home;