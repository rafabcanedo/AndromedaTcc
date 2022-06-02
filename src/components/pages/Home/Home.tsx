import React from 'react';
import styles from './Styles.module.scss';
//import Button from '../../Navigation/Button'not import here, because is color that´s is different
import { Link } from 'react-router-dom';


// Não está aparecendo na tela Home


function Home() {
 return(
    <div className={styles.container}>
    <div className={styles.content}>
     <h1>Bem Vindo ao Andrômeda 🚀, <br />
        Uma plataforma de produtividade 🌒</h1>
     <h3>Onde você cria, desenvolve e organiza <br />
         sua rotina</h3>
      </div>
      <div className={styles.btn}>
         <Link to='/applications'>
         <button className={styles.button}>Entre no Foguete</button>
         </Link>
      </div>
    </div>
 );
}

export default Home;