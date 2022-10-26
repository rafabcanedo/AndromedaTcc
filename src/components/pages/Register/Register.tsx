import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Img from '../../../assets/image/test1.png';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

 return(
    <div className="section-login">
    <div className="container-login">
    <div className="wrap-login">
     <form className="form-login">
  
      <span className="login-form-title">
       Criar uma Conta
      </span>
      <span className="login-form-title">
       <img src={Img} alt="Logo Login" />
      </span>

      <div className="wrap-input">
       <input 
        className={name !== "" ? "has-val input-login" : "input-login"}
        type="name"
        value={name}
        onChange={e => setName(e.target.value)}
       />
       <span className="focus-input" placeholder="Nome"></span>
      </div>
  
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
        Registrar
       </button>
      </div>
  
      <div className="text-newacc">
       <span className="txt1-acc">
        Já possui uma conta?
       </span>
       <Link className="txt2-acc" to="/login">
        Acessar conta
       </Link>
      </div>
     </form>
    </div>
    </div>
    </div>
 );
}

export default Register;