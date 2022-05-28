import React, { useState, useContext, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import LayoutComponents from '../../Design/layout/LayoutComponents';

import Logo from '../../../assets/image/test1.png';
import styles from './styles.module.scss';

// Context Auth

const Login = () => {
   // reconhecendo o valor do email
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   // useContext Auth
  // const { authenticated, handleLogin } = useContext(Context);
 
   // Test no console.log
   //console.log('Login',authenticated);
   //console.degub('Login', authenticated);
 return(
    <LayoutComponents>
     <form className={styles.loginForm}>
      <span className={styles.loginFormTitle}>
         <img src={Logo} alt="Logo Andromeda" />
      </span>
      <span className={styles.loginFormTitle}>Bem Vindo!</span>

      <div className={styles.wrapInput}>
       <input
        className={styles.input}
        placeholder="Entre com seu email"
        type="email"
        id="emil1"
        value={email}
        onChange={e => setEmail(e.target.value)}
       />
       <span className={styles.focusInput}></span>
      </div>

      <div className={styles.wrapInput}>
         <input 
          className={styles.input}
          placeholder="Entre com sua senha"
          type="password"
          id="pwd1"
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
          <span className={styles.focusInput}></span>
      </div>

      <Link to='/'>
       <div className={styles.containerLoginBtn}>
        <button className={styles.loginFormBtn}>Login</button>
       </div>
      </Link>

      <div className={styles.textCreate}>
        <span className={styles.text1}>Não possui uma conta?</span>
        <Link className={styles.text2} to='/register'>
          Criar Conta
        </Link>
      </div>
     </form>
    </LayoutComponents>
 );
}

export default Login;

// <button className={styles.loginFormBtn} onClick={handleLogin}>Login</button>