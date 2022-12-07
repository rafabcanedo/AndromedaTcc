import React, { useState } from "react";
import './Login.css';

import { Link, useNavigate } from "react-router-dom";

import Img from '../../../assets/image/test1.png';
import LogoGoogle from '../../../assets/image/googlelogo.png';

import { GoogleLogin } from '@react-oauth/google';

<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;

const Login = () => {

 const navigate = useNavigate();

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
      value={password}
      onChange={e => setPassword(e.target.value)}
     />
     <span className="focus-input" placeholder="Senha"></span>
    </div>

    <div className="btn-login-form">
     <button className="login-form-btn">
      Login
     </button>
    </div>

    <div className="google-signin">
    <button>
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