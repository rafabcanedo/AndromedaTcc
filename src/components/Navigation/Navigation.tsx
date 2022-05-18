import React from 'react';
import styled from 'styled-components';
//import Logo from '../../assets/image/LogoNav.png';
import Icon from '../../assets/image/test1.png';
import Menu from './Menu';

const Section = styled.section`
 width: 100vw;
 background: white;
`;

const IMG = styled.img`
 height: 4em;
 margin: 0 1rem;
 cursor: pointer;
  &:hover {
  transform: scale(1.1);
   }
`;

const Navbar = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;

 width: 85%;
 height: 5em;
 margin: 0 auto;

/* img {
   height: 4em;
   margin: 0 1rem;
   cursor: pointer;
   &:hover {
     transform: scale(1.1);
   }
 }*/
`;


const Navigation = () => {
 return(
  <Section>
    <IMG src={Icon} alt="" />
    <Navbar>
    <Menu />
    </Navbar>
  </Section>
 ); 
}

export default Navigation;