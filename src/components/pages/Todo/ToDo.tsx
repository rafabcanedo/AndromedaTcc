import React from 'react';
import styles from './styles.module.scss';
import './global.css';
import TodoTask from './ToDoTask/ToDoTask';

function ToDo() {
 return(
   <div className={styles.container}>
    <header>
    <h2>Lista De Tarefas</h2>

    <input 
     type="text" autoComplete="off"
     placeholder="Escreva uma Tarefa..."
     name="task"
     className="input"
    />

    <button type="submit" className={styles.btn}>Adicionar Tarefa</button>
    </header>

    <div className={styles.line}></div>

    <TodoTask />
   </div>
 );
}

export default ToDo;