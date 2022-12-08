import React, { useState } from "react";
import './Login.css';

import { Link } from "react-router-dom";

import Img from '../../../assets/image/test1.png';
import LogoGoogle from '../../../assets/image/googlelogo.png';

import { getRedirectResult, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth } from "../../../services/firebaseConfig";

function Login() {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.setCustomParameters({
    login_hint: 'user@example.com'
  });

  function signInGoogle(e){
    e.preventDefault();
  signInWithRedirect(auth, provider)
  getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result!);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result?.user;
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorMessage);
  });

  }

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 return(
  <div className="section-login">
  <div className="container-login">
  <div className="wrap-login">
   <form className="form-login">

    <span className="login-form-title">
     Bem Vindo !
    </span>
    <span className="login-form-title">
     <img src={Img} alt="Logo Login" />
    </span>

    <div className="wrap-input">
     <input 
      className={email !== "" ? "has-val input-login" : "input-login"}
      type="email"
      value={email}
      onChange={e => setEmail(e.target.value)}
     />
     <span className="focus-input" placeholder="Email"></span>
    </div>
   
    <div className="wrap-input">
     <input 
      className="input-login" 
      type="password"
      autoComplete="on"
     />
     <span className="focus-input" placeholder="Senha"></span>
    </div>

    <div className="btn-login-form">
     <button className="login-form-btn">
      Login
     </button>
    </div>

    <div className="google-signin">
    <button onClick={signInGoogle}>
      <img src={LogoGoogle} alt="logo-google" />
      <span>Login com Google</span>
    </button>
    </div>

    <div className="text-newacc">
     <span className="txt1-acc">
      Não possui uma conta?
     </span>
     <Link className="txt2-acc" to="/register">
      Criar Conta
     </Link>
    </div>
   </form>
  </div>
  </div>
  </div>
 );
}

export default Login;