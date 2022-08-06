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

// nao vou exportar, pois será usado apenas aqui
const BaseInput = styled.input`
 background: transparent;
 height: 2.5rem;
 border: 0;
 border-bottom: 2px solid #E1E1E6;
 font-weight: bold;
 font-size: 1.125rem;
 padding: 0 0.5rem;
 color: #bfc0c0;
 outline: 0;

 &:focus {
  box-shadow: none;
  border-color: #42b883;
 }

 &::placeholder {
  color: #E1E1E6;
 }
`;

export const TaskInput = styled(BaseInput)`
 flex: 1;

 &::-webkit-calendar-picker-indicator {
  display: none !important;
 }
`;

export const MinutesAmountInput = styled(BaseInput)`
 width: 4rem;
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

export const StartCountdownButton = styled.button`
 width: 100%;
 border: 0;
 padding: 1rem;
 border-radius: 8px;

 display: flex;
 align-items: center;
 justify-content: center;

 gap: 0.5rem;
 font-weight: bold;

 cursor: pointer;
 background: #42b883;
 color: #E1E1E6;

 &:disable {
  opacity: 0.7;
  cursor: not-allowed;
 }

 &:not(:disable)hover {
  background: #015F46;
 }
`;