import React from 'react';
import "./Home.css";
import Button from '../../Navigation/Button';
import { Link } from 'react-router-dom';
import { NotePencil, CalendarCheck, Fire } from 'phosphor-react';

// Não está aparecendo na tela Home


function Home() {
 return(
    <>
    <div className="container-home">
    <div className="content-home">
     <h1>Bem Vindo ao Andrômeda 🚀, <br />
        Uma plataforma de produtividade 🌒</h1>
     <h3>Onde você cria, desenvolve e organiza <br />
         sua rotina</h3>
      </div>
      <div className="btn-home">
         <Link to='/applications'>
         <button className="button-home">Entre no Foguete</button>
         </Link>
      </div>
    </div>
    <div className="aplicacoes-home">
    <h1>Aplicações</h1>

    <div className="incentivos-home">
      <div className="container-incentivoshome">
       <div className="metas-home">
       <NotePencil size={28} color="red" className="icon-note" />
       <span className="title-incentivos">
         Defina Suas Metas
       </span>
       <h4 className="text-icentivos">
         Com essas ferramentas <br />
         você alcançará o <br />
         próximo nível
       </h4>
       </div>
      </div>
    </div>
    </div>
    
    <div className="container-info">
       <Button text="Sobre Nós" link="/sobre" />

       <Button text="Comece Agora" link="/applications" />

       <Button text="Tire sua Dúvida" link="sobre" />
    </div>
    
 </>
 );
}

export default Home;

/*
<CalendarCheck size={32} />
<NotePencil size={32} />
<Fire size={32} />
*/