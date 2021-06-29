import React , { useState}from 'react'
import './css/signup.css'
import { NavLink } from 'react-router-dom'
import Axios from 'axios';
// import useHistory from "react-router-dom";


const Signup = (props) => {

    const [user, setUser] = useState({});
    const { setUserState } = props;
    // let history = useHistory();

    const onSubmitClick = async (event) => {
        event.preventDefault();
        console.log(user);
        await Axios.post("http://localhost:9000/signup", user)
            .then(({ data }) => {
                localStorage.setItem("user", JSON.stringify(data));
                console.info(data);
                setUserState(data.user);
                // history.push("/");
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <div>
           <form action="#" method="post">
    <div className="container">
    <span className="cancel_btn"> <NavLink exact to="/"> <i class="far fa-window-close"></i></NavLink> </span>
        <div className="heading">
            <h2>Create New Account</h2>
        </div>
        <div className="sign_up_with_google">
            <a href="#"> <i  className="fab fa-google"> &nbsp; Sign Up With Google</i></a>
        </div>
        <div className="content">
            <div className="input-firstname">
                <label for="firstName" className="label"> First Name</label> <br/>
               <i className="fas fa-user"></i> <input type="text" id="firstName" placeholder="Enter your FirstName"
                    onChange={(e) => {
                                    setUser({
                                        ...user,
                                        firstName: e.target.value,
                                    });
                                }}
               />
            </div>
            <div className="input-firstname">
                <label for="lastName" className="label"> Last Name</label> <br/>
               <i className="fas fa-user"></i> <input type="text" id="lastName" placeholder="Enter your lastName"
                    onChange={(e) => {
                                    setUser({
                                        ...user,
                                        lastName: e.target.value,
                                    });
                                }}
               />
            </div>
            <div className="input-email">
                <label for="email" className="label">Email</label> <br/>
                <i className="fas fa-lock"></i>  <input type="email" id="email" placeholder="Enter your Email"
                     onChange={(e) => {
                                    setUser({
                                        ...user,
                                        email: e.target.value,
                                    });
                                }}
                />
            </div>
            <div className="input-contact">
                <label for="Password" className="label">Password </label> <br/>
                <i className="fas fa-key"> </i> <input type="password" id="Password"  placeholder="Password"
                 onChange={(e) => {
                                    setUser({
                                        ...user,
                                        password: e.target.value,
                                    });
                                }} />
            </div>
            
            <div className="checkbox">
                <input type="checkbox" name="Terms" id="Terms"/> 
              &nbsp; &nbsp;  <label  for="Terms">Accept  <a href="# "> Terms and Conditions</a> </label>
            </div>
            <div className="btn">
               <button type="sumbit" onClick={onSubmitClick}>Sign Up</button>
            </div>
            <div className="another-txt">
                <p>Already have an account! <NavLink to="/login"> Login to the existing Account.</NavLink></p>
            </div>
        </div>
    </div>
    </form>
        </div>
    )
}

export default Signup
