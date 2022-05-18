import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './components/Navigation/Menu';

// Import Screens
import Home from './components/pages/Home/Home';
import Applicacoes from './components/pages/Applications/Applications';
import Pomodoro from './components/pages/Pomodoro/Pomodoro';
import ToDo from './components/pages/Todo/ToDo';
import Calendario from './components/pages/Calendar/Calendar';
import Sobre from './components/pages/Sobre/Sobre';

export default function AppRouter() {
    return(
    <Router>
     <Menu />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/applications' element={<Applicacoes />} />
      <Route path='/sobre' element={<Sobre />} />
      <Route path='/pomodoro' element={<Pomodoro />} />
      <Route path='/todolist' element={<ToDo />} />
      <Route path='/calendario' element={<Calendario />} />
     </Routes>
    </Router>
    );
};