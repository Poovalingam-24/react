import { useState } from "react";
import { Link } from "react-router-dom";
import './register.css'

function Register(){

    const[pass1,setPass1] = useState("");
    const[pass2,setPass2] = useState("");
    const[match,setMatch] = useState(true);

    function handlepass1(event){
        setPass1(event.target.value);
    }
    function handlepass2(event){
        setPass2(event.target.value);

        if(pass1==event.target.value){
            setMatch(true);
        }
        else{
            setMatch(false);
        }
    }

    return(
        <div class="container">
        <form action="button">
            <table>
                <h2 class="title">Register</h2>
                
            <tr>  <td><label htmlFor="name">Name</label></td> </tr>
            <tr> <td><input type="text" placeholder="Enter The Name" class = "one"/></td></tr>

            <tr>  <td><label htmlFor="email">Email</label></td> </tr>
            <tr><td><input type="email" placeholder="Enter The Mail Id" class = "one"/></td> </tr>

            <tr>  <td><label htmlFor="">Password</label></td> </tr>
            <tr><td><input type="password" value={pass1} onChange={handlepass1} class = "one" minLength={6}/></td></tr>

            <tr> <td><label htmlFor="">Confirm Password</label></td> </tr>
            <tr> <td><input type="password" value={pass2} onChange={handlepass2} class = "one" minLength={6} /></td> </tr>

            <tr><td>
            <input type="radio" name = "role" value = "Farmer"/>{" "}Farmer{" "}
            <input type="radio" name = "role" value = "Customer"/>{" "}Customer <br /></td></tr>
            <div>{!match && <p>Password don't Match !!!</p>}</div>
            <Link to = "/login">
            <tr><td><button type="submit" id = "button">Sign Up</button></td></tr>
            </Link>
            <p className="account">
            AlReady have an account?{" "} 
            <Link to = "/login">
            <b>Login</b>
            </Link>
          </p>

            </table>
        </form>
        </div>
    );
}

export default Register