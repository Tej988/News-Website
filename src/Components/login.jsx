import React, { useState } from 'react'
import './css/login.css'
import { NavLink } from 'react-router-dom';
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Login = (props) => {

    const [Credential, setCredential] = useState({});
    const { setUserState } = props;
    let history = useHistory();

    const onSumbitClick = async (event) => {
        event.preventDefault();
        await Axios.post("http://localhost:9000/login", Credential)
            .then(({ data }) => {
                console.log(data);
                localStorage.setItem("user", JSON.stringify(data));
                setUserState(data.user);
                history.push("/");

            })
            .catch((error) => {
                console.error(error)
            }) 
            .finally(() => {
                console.info("Login Api call finished")
            })
    }




    return (
        <div>
            <form method="post">

                <div className="container">
                    <span className="cancel_btn"> <NavLink exact to="/"> <i class="far fa-window-close"></i></NavLink> </span>
                    <div className="heading">
                        <h2>Welcome Back !</h2>
                    </div>
                    <div className="sign_up_with_google">
                        <a href="#"> <i className="fab fa-google"> &nbsp; Login  With Google</i></a>
                    </div>
                    <div className="content">


                        <div className="input-email">
                            <label for="email" className="label">Email </label> <br />
                            <i className="fas fa-lock"></i>  <input type="email" id="email" placeholder="Enter your Email"
                                onChange={(e) => { setCredential({ ...Credential, email: e.target.value }) }} />
                        </div>
                        <div className="input-contact">
                            <label for="Password" className="label">Password </label> <br />
                            <i className="fas fa-key"> </i> <input type="password" id="Password" placeholder="Enter Your Password"
                                onChange={(e) => { setCredential({ ...Credential, password: e.target.value }) }} />
                        </div>

                        <div className="btn">
                            <button type="sumbit" onClick={onSumbitClick}>Login</button>
                        </div>
                        <div className="another-txt">
                            <p>Don't have an account! <NavLink to="/signup"> create an Account.</NavLink></p>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Login



