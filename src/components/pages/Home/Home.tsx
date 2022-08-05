import React from 'react';
import styles from './Styles.module.scss';
import Button from '../../Navigation/Button';
import { Link } from 'react-router-dom';
import { FaRegEdit, FaRegCalendarCheck, FaRegGrinStars } from "react-icons/fa";

// Não está aparecendo na tela Home


function Home() {
 return(
    <>
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
       <br />
       <br />
    <div className={styles.aplicacoes}>
    <h1>Aplicações</h1>

    <div className={styles.incentivos}>
      <FaRegEdit size={28} color="red" />
      <div className={styles.containerIncentivos}>
       <div className={styles.metas}>
       <text>Defina Suas Metas</text>
       <h4>
         Com essas ferramentas <br />
         você alcançará o <br />
         próximo nível
       </h4>
       </div>
      </div>
    </div>
    </div>
    
    <div className={styles.containerInfo}>
       <Button text="Sobre Nós" link="/sobre" />

       <Button text="Comece Agora" link="/applications" />

       <Button text="Tire sua Dúvida" link="sobre" />
    </div>
    
 </>
 );
}

export default Home;

/*
<FaRegEdit size={28} color="red" />
         <FaRegCalendarCheck size={28} color="red" />
         <FaRegGrinStars size={28} color="red" />
*/