import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

function Applications() {
 return(
    <>
    <div className={styles.titleHome}>
    <h1>Applications</h1>
    </div>
    <div className={styles.buttons}>
    <Link to='/pomodoro'>
    <button> Pomodoro </button>
    </Link>
    <Link to='/todolist'>
    <button> ToDo List </button>
    </Link>
    <Link to='/calendario'>
    <button> Calendar </button>
    </Link>
    <Link to='/'>
    <button> Sei la </button>
    </Link>
    </div>
    </>
 );
}

export default Applications;

// create the buttons for example what I Do