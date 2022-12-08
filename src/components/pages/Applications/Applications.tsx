import React, { useState } from 'react';
import "./Applications.css";
import { Link } from 'react-router-dom';

function Applications() {
 return(
  <>
  <div className="applications-title">
    <h1>Aplicações</h1>
    <h3>
      Inicie aqui sua trilha da produtividade em Andrômeda <br />
      entre em seu foguete e acomode-se. <br /> 
      A viagem ja se inicia ao "universo" da produtividade.
    </h3>
    </div>
  <br />
  <br />
  <br />
  <br />
  <div className="container-home">
  <div className="ctn-apps">
    
    <div className="box-apps-home">
    <div className="ctn-photo-apps">
    </div>
    <h2 className="title-img-home">
     Pomodoro
    </h2>
    <br />
    <p className="p-img-home">
    Pomodoro é uma ferramenta foi desenvolvida para se trabalhar <br />
         junto ao tempo, com um cronômetro flexiível você poderá definir <br />
         seu próprio tempo para suas atividades listadas.
    </p>
    <div className='button-app-margin'>
    <Link to="/pomodoro">
    <button className="btn-applications">Pomodoro</button>
    </Link>
    </div>
    </div>

    <div className="box-apps-home">
    <h2 className="title-img-home">
     Lista de Tarefas
    </h2>
    <br />
    <p className="p-img-home">
    Lista de Tarefas(ToDo List em inglês) é uma ferramenta usada <br />
         para listar suas atividades diárias, semanais ou atividades <br />
         de um projeto específico sendo por ordem de prioridade ou <br />
         por ordem por linha de tempo.
    </p>
    <div className='button-app-margin-2'>
    <Link to="/todolist">
    <button className="btn-applications">Lista de Tarefas</button>
    </Link>
    </div>
    </div>
    
    <div className="box-apps-home">
    <h2 className="title-img-home">
     Calendario
    </h2>
    <br />
    <p className="p-img-home">
    Calendário é uma ferramenta padrão, já utilizada há décadas <br />
         e muito prática. Aqui você pode se organizar seus compromissos <br />
         conforme o dia, semana e mês de sua preferência.
    </p>
    <div className='button-app-margin'>
    <Link to="/calendario">
    <button className="btn-applications">Calendario</button>
    </Link>
    </div>
    </div>
    </div>
    </div>
  </>
 );
}

export default Applications;