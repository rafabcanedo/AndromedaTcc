import React from 'react';
import styles from './styles.module.scss';

function ToDoTask() {
 return (
     <div className={styles.card}>
        <div>
         <p>Fazer Tarefa</p>
        </div>

     <div className={styles.line2}>
        <span className={styles.btnCard}>X</span>
     </div>
     </div>
 );
}

export default ToDoTask;