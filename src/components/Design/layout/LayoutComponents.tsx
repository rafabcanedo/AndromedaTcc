import React from 'react';
import styled from 'styled-components';

/*type ChildrenProps = {
  text?: string;
}*/

interface LayoutProps {
  text?: string;
}

const Container = styled.div`
 width: 100%;
 margin: 0 auto;
`;

const ContainerLogin = styled.div`
 width: 100%;
 min-height: 100vh;

 display: flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: center;

 padding: 15;
 background-color: #292F40;
`;

const WrapLogin = styled.div`
 width: 390px; //100%
 background-color: #232b41;
 border-radius: 10px;

 overflow: hidden;
 padding: 77px 55px 33px 55px;

 box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

function LayoutComponents(props: LayoutProps) {
  return (
    <Container>
     <ContainerLogin>
      <WrapLogin>
      {props.text}
      </WrapLogin>   
     </ContainerLogin>
    </Container>
    );
}

export default LayoutComponents;

/*
const LayoutComponents: React.FC<IProps> = ({
    children
  }) => (
*/