import React from 'react';
import styled from 'styled-components';

const LogoText = styled.h1`
 font-family: 'Jua', sans-serif;
 font-size: 2rem;
`;

const Logo = () => {
    return(
     <LogoText>
       Canedo.
     </LogoText>
    );
}

export default Logo;