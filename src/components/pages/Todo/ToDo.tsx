import React from 'react';
import './ToDo.css';

import TodoTask from './TodoTask/TodoTask';

function ToDo() {
 return(
  <div className="app-todolist">
    <header className="header-tarefa">
     <h2>Lista De Tarefas</h2>

     <input 
      type="text" autoComplete="off"
      placeholder="Adicionar uma tarefa..."
      className="input-tarefa"
     />

     <button type="submit" className="btn-headerlist">
      Adicionar
     </button>

     <div className="line-list"></div>

     <TodoTask />
    </header>
  </div>
 );
}

export default ToDo;