import React from 'react';
import "./Home.css";
import Button from '../../Navigation/Button';
import { Link } from 'react-router-dom';
import { NotePencil, CalendarCheck, Fire } from 'phosphor-react';

import img1 from '../../../assets/image/pomodoro.png';
import img2 from '../../../assets/image/todolist.png';
import img3 from '../../../assets/image/calendario.png';

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
    

    <div className="ctn-apps">
    
    <div className="box-apps-home">
    <div className="ctn-photo-apps">
     <img src={img1} alt="pomodoro" />
    </div>
    <h2 className="title-img-home">
     Pomodoro
    </h2>
    <p className="p-img-home">
      Gerencie todo o seu tempo com pomodoro.
    </p>
    </div>

    <div className="box-apps-home">
    <div className="ctn-photo-apps">
     <img src={img2} alt="lista de tarefas" width="300px" height="250px" />
    </div>
    <h2 className="title-img-home">
     Lista de Tarefas
    </h2>
    <p className="p-img-home">
      Liste todas suas atividades com Lista de Tarefas.
    </p>
    </div>
    
    <div className="box-apps-home">
    <div className="ctn-photo-apps">
    <img src={img3} alt="calendario" width="300px" height="250px"/>
    </div>
    <h2 className="title-img-home">
     Calendario
    </h2>
    <p className="p-img-home">
     Agende seus compromissos com Calendario.
    </p>
    </div>

    </div>
    </div>


    <div className="incentivos-home">

     <div className="cnt-home">
      <NotePencil size={28} color="purple" className="icon-note" />
      <h4 className="title-incentivos">
       Defina Suas Metas
      </h4>
      <span className="text-icentivos">
        Com essas ferramentas <br />
        você alcançará o <br />
        próximo nível
      </span>
     </div>

     <div className="cnt-home">
      <CalendarCheck size={28} color="purple" className="icon-note" />
      <h4>
       Conclua suas Metas
      </h4>
      <span>
       Organização é a <br />
       virada de chave para <br />
       o sucesso
      </span>
     </div>

     <div className="cnt-home">
      <Fire size={28} color="purple" className="icon-note" />
      <h4>
       Dobre suas Metas
      </h4>
      <span>
       O segredo é nunca estar <br />
       parado, então dobre <br />
       suas metas
      </span>
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

  <div className="container-info">
       <Button text="Sobre Nós" link="/sobre" />

       <Button text="Comece Agora" link="/applications" />

       <Button text="Tire sua Dúvida" link="sobre" />
    </div>
*/