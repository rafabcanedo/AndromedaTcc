import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './components/Navigation/Menu';
import Footer from './components/Design/Footer';

// Import Screens
import Home from './components/pages/Home/Home';
import Applicacoes from './components/pages/Applications/Applications';

import Pomodoro from './components/pages/Pomodoro/Home/Pomodoro';
import History from './components/pages/Pomodoro/History/History';
import { DefaultLayout } from './components/pages/Pomodoro/DefaultLayout/DefaultLayout';

import ToDo from './components/pages/Todo/ToDo';
import Calendario from './components/pages/Calendar/Calendar';
import Sobre from './components/pages/Sobre/Sobre';


import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';

export default function AppRouter() {
    return(
    <Router>
     <Menu />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/applications' element={<Applicacoes />} />
      <Route path='/sobre' element={<Sobre />} />

      <Route path="/pomodoro" element={<DefaultLayout />}>
      <Route path='/pomodoro' element={<Pomodoro />} />
      <Route path='/pomodoro/history' element={<History />} />
      </Route>
      
      <Route path='/todolist' element={<ToDo />} />
      <Route path='/calendario' element={<Calendario />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      
     </Routes>
     <Footer />
    </Router>
    );
};