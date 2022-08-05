import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
    text: string;
    link: string;
}

const Btn = styled.button`
 display: inline-block;
 background-color: #6D21CE; //#633BBC;
 color: #fff;
 outline: none;
 border: none;
 font-family: 'Sora', sans-serif;

 font-size: 0.875em;
 padding: 0.9rem 2.3rem;
 border-radius: 50px;
 cursor: pointer;

 transition: all 0.2s ease;

 &:hover {
     transform: scale(1.1);
 }
`;

const Button: React.FC<Props> = ({
    text,
    link,
  }) => (
  <Btn>
    <a href={link} arial-label={text} rel="noneferrer">
      {text}
    </a>
  </Btn>
 );

export default Button;