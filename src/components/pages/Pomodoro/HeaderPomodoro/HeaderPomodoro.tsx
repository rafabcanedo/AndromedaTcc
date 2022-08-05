import { HeaderContainer } from "./styles";
import { Timer, Scroll } from 'phosphor-react';
import { NavLink } from "react-router-dom";

import logoAndromeda from '../../../../assets/image/test1.png';

function HeaderPomodoro() {
 return (
  <HeaderContainer>
   <img src={logoAndromeda} alt="" width={80} />
   <nav>
     <NavLink to="/pomodoro" title="Pomodoro">
       <Timer size={24} />
     </NavLink>
     <NavLink to="/pomodoro/history" title="Histórico">
       <Scroll size={24} />
     </NavLink>
   </nav>
  </HeaderContainer>
 );
}

export default HeaderPomodoro;