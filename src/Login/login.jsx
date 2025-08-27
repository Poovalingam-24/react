import './login.css'
import { Link } from 'react-router-dom';

function Login(){
    return(
    <>
    <div className="authbox">
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <Link to = "/dashboard">
            <button type="submit">Login</button>
            </Link>
          </form>
          <p>
            Don’t have an account?{" "}
            <Link to = "/">Register</Link>
          </p>
        </div>
    </>
    );
}
export default Login