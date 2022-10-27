import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Logo from '../../assets/image/test1.png';

const Section = styled.section`
 width: 100vw;
 background: ${props => props.theme['gray-200']};
`;

const Navbar = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;

 width: 85%;
 height: 5em;
 margin: 0 auto;

 img {
   height: 4em;
   margin: 0 1rem;
   cursor: pointer;
   &:hover {
     transform: scale(1.1);
   }
 }
`;

const Ul = styled.ul`
 align-items: center;
 display: flex;
 list-style: none;
 justify-content: space-between;
`;

const Li = styled.li`
 margin: 0 1rem;
 color: #6D21CE;
 cursor: pointer;

  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: #00E84C;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

function Menu() {
  const rotas = [{
   label: 'Home',
   to: '/'
 }, {
   label: 'Aplicacoes',
   to: '/applications'
 }, {
   label: 'Sobre Nós',
   to: '/sobre'
 }];
 return(
   <Section>
    <Navbar>
    <img src={Logo} alt="" />
     <Ul>
      {rotas.map((rota, index) => (
       <Li key={index}>
        <a href={rota.to}>
          {rota.label}
        </a>
       </Li>
      ))}
     </Ul>
      <Button text="Login" link="/login" />
    </Navbar>
   </Section>
 );
}

export default Menu;