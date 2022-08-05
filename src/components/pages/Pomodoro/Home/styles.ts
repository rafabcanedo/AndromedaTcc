import styled from "styled-components";

export const HomeContainer = styled.main`
 flex: 1;

 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

 form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
 }
`;

export const FormContainer = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 0.5rem;
 color: #bfc0c0;
 font-size: 1.125rem;
 font-weight: bold;
 flex-wrap: wrap;
`;

export const CountdownContainer = styled.div`
 font-family: 'jost', sans-serif;
 font-size: 10rem;
 line-height: 8rem;
 color: #bfc0c0;

 display: flex;
 gap: 1rem;

 span {
  background: #000000;
  padding: 2rem 1rem;
  border-radius: 8px;
 }
`;

export const Separator = styled.div`
 padding: 2rem 0;
 color: #42b883;

 width: 4rem;
 overflow: hidden;
 display: flex;
 justify-content: center;
`;