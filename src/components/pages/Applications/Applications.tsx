import React from 'react';
import "./Applications.css";
import { Link } from 'react-router-dom';

function Applications() {
 return(
    <>
    <div className="applications-title">
    <h1>Applications</h1>
    </div>
    <div className="buttons-applications">
    <Link to='/pomodoro'>
    <button className="btn-applications">
      Pomodoro
    </button>
    </Link>
    <Link to='/todolist'>
    <button className="btn-applications"> 
      ToDo List 
    </button>
    </Link>
    <Link to='/calendario'>
    <button className="btn-applications"> 
      Calendar 
    </button>
    </Link>
    <Link to='/'>
    <button className="btn-applications"> 
      Sei la
    </button>
    </Link>
    </div>
    </>
 );
}

export default Applications;

// create the buttons for example what I Do