import React from 'react';
import styles from './styles.module.scss';

// import Images
import Avatar from '../../../assets/image/avatar.jpg';

// Import Icons
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

function Sobre() {
 return(
    <>
    <div className={styles.title}>
     <h1>O que é Andrômeda?</h1>
      <h3>Andrômeda é uma plataforma de produtividade onde você <br />
        desenvolve sua prática de organização. O limite do seu <br />
        "espaço" de trabalho é você quem cria.
      </h3>
    </div>

    <div className={styles.container}>
     <div className={styles.box}>
     <h1>
         Quais as vantagens <br />
         de utilizar Andrômeda?
     </h1>
     <h3>
         Desenvolver disciplina, alcançar <br />
         objetivos, realizar metas com todas <br />
         as ferramentas em uma única <br />
         plataforma.
     </h3>
     </div>
     <div className={styles.box}>
     <h1>
         Quais a missão de <br />
         Andrômeda?
     </h1>
     <h3>
         Auxiliar você alcançar mais objetivos <br />
         em menor tempo. <br />
         Consiliar a rotina criada por você.
     </h3>
     </div>
    </div>

    <div className={styles.title}>
      <h1>Fale Conosco</h1>
      <h3>Tem interesse em entrar em contato com a gente?<br />
          Siga nossas Redes Sociais abaixo:
      </h3>
    </div>
    <div className={styles.secondContainer}>
     <div className={styles.iconList}>
      <a href='https://www.instagram.com/canedodev/' target='_blank'
        rel='nooperner'
      >
       <FaInstagram size={85} />
      </a>
      <a href='https://www.linkedin.com/in/rafael-canedo-4abaa8197/' target='_blank'
        rel='nooperner'
      >
      <FaLinkedin size={85} />
      </a>
      <a href='https://twitter.com/canedopriv' target='_blank'
        rel='nooperner'
      >
      <FaTwitter size={85} />
      </a>
      <a href='https://www.twitch.tv/canedopriv' target='_blank'
        rel='nooperner'
      >
      <FaTwitch size={85} />
      </a>
     </div>
    </div>

    <div className={styles.title}>
      <h1>Desenvolvedores</h1>
    </div>
    <div className={styles.terceiroContainer}>
      <img src={Avatar} alt="Avatar Dev" />
    </div>
    <div className={styles.description}>
    <h3>Rafael Canedo</h3>
    <h4>C.O e Desenvolvedor</h4>
    <p>Formado em Sistemas de Informação, Rafael Canedo, fundou Andrômeda <br /> 
       hoje trabalha como desenvolvedor Web aqui em Andrômeda. <br />
       Seu foco é no Design e no Front End de todo o projeto.
       </p>
    </div>
    </>
 );
}

export default Sobre;