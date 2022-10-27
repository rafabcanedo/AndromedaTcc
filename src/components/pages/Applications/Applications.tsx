import React, { useState } from 'react';
import "./Applications.css";
import { Link } from 'react-router-dom';

import { ArrowDown } from 'phosphor-react';

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

    <div className="body-applications">
     <header className="header-title">
       3 Aplicações disponíveis
     </header>
     </div>

     <div className="container-applications">
      
      <div className="applications-list">
       <h3>
        Pomodoro
       </h3>
       <span>
         Pomodoro é uma ferramenta foi desenvolvida para se trabalhar <br />
         junto ao tempo, com um cronômetro flexiível você poderá definir <br />
         seu próprio tempo para suas atividades listadas.
       </span>
      <Link to='/pomodoro'>
      <button className="btn-applications">
       Pomodoro
      </button>
      </Link>
      </div>

      <div className="applications-list">
       <h3>
        Lista de Tarefas
       </h3>
       <span>
         Lista de Tarefas(ToDo List em inglês) é uma ferramenta usada <br />
         para listar suas atividades diárias, semanais ou atividades <br />
         de um projeto específico sendo por ordem de prioridade ou <br />
         por ordem por linha de tempo.
       </span>
       <Link to='/todolist'>
       <button className="btn-applications"> 
        ToDo List 
       </button>
       </Link>
      </div>

      <div className="applications-list">
       <h3>
        Calendário
       </h3>
       <span>
         Calendário é uma ferramenta padrão, já utilizada há décadas <br />
         e muito prática. Aqui você pode se organizar seus compromissos <br />
         conforme o dia, semana e mês de sua preferência.
       </span>
       <Link to='/calendario'>
      <button className="btn-applications"> 
        Calendar 
      </button>
      </Link>
      </div>

     </div>
    
    
    <div className="faq-title">
     <h1>F.A.Q</h1>
    </div>
    <div className="section-faq">
    
    </div>
    </>
 );
}

export default Applications;

// <ArrowDown size={32} color="#633BBC" size={28} />