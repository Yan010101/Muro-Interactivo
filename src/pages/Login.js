import React from "react";
import {auth, provider} from "../firabase-config";
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from 'react-router-dom'


function Login ({setIsAuth}) {
  let navigate = useNavigate();

  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    } );
  };

  return  <div className="loginPage">
    <p>Sign in with Google</p>
    <button className="login-with-google-btn" onClick={SignInWithGoogle}>Sign in with Google</button>
    </div>
}

export default Login;