import React from 'react';
import './Sobre.css';

// import Images
import Avatar from '../../../assets/image/avatar.jpg';
import Avatar2 from '../../../assets/image/storion.png';

// Import Icons
import { InstagramLogo, LinkedinLogo, TwitterLogo, TwitchLogo } from 'phosphor-react';

function Sobre() {
 return(
    <>
    <div className="title-sobre">
     <h1>O que é Andrômeda?</h1>
      <h3>Andrômeda é uma plataforma de produtividade onde você <br />
        desenvolve sua prática de organização. O limite do seu <br />
        "espaço" de trabalho é você quem cria.
      </h3>
    </div>

    <div className="container-sobre">
     <div className="box-sobre">
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
     <div className="box-sobre">
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

    <div className="title-sobre">
      <h1>Fale Conosco</h1>
      <h3>Tem interesse em entrar em contato com a gente?<br />
          Siga nossas Redes Sociais abaixo:
      </h3>
    </div>
    <div className="second-csobre">
     <div className="icon-slist">
      
      <div className="cnt-icons">
      <a href='https://www.instagram.com/canedodev/' target='_blank'
        rel='nooperner'
      >
       <InstagramLogo size={32} />
      </a>
      </div>
      <div className="cnt-icons">
      <a href='https://www.linkedin.com/in/rafael-canedo-4abaa8197/' target='_blank'
        rel='nooperner'
      >
      <LinkedinLogo size={32} />
      </a>
      </div>
      <div className="cnt-icons">
      <a href='https://twitter.com/canedopriv' target='_blank'
        rel='nooperner'
      >
      <TwitterLogo size={32} />
      </a>
      </div>
      <div className="cnt-icons">
      <a href='https://www.twitch.tv/canedopriv' target='_blank'
        rel='nooperner'
      >
      <TwitchLogo size={32} />
      </a>
      </div>
     </div>
    </div>

    <div className="title-sobre">
      <h1>Desenvolvedores</h1>
    </div>

   <div className="info-desenvolvedores">
    <div className="terceiro-csobre">
      <div className="cnt-dev">
      <img src={Avatar} alt="Avatar Dev" />
      
    <div className="description-sobre">
    <h3>Rafael Canedo</h3>
    <h4>C.O e Desenvolvedor</h4>
    <span>
       Formado em Sistemas de Informação, Rafael Canedo, fundou o projeto <br /> 
       hoje trabalha como desenvolvedor Web aqui em Andrômeda. <br />
       Seu foco é no Design e no Front End de todo o projeto.
    </span>
    </div>
    </div>
    </div>
    <div className="terceiro-csobre">
      <div className="cnt-dev">
      <img src={Avatar2} alt="Avatar Dev" />
      
    <div className="description-sobre">
    <h3>Marcelo Storion</h3>
    <h4>Orientador</h4>
    <span>
       Formado em Ciência da Computação, Marcelo Storion, hoje trabalha
       gerenciando todo o projeto aqui em Andrômeda. <br />
       Seu foco é no verificar todos os análises de futuras atualizações.
    </span>
    </div>
    </div>
    </div>
    </div>
    </>
 );
}

export default Sobre;