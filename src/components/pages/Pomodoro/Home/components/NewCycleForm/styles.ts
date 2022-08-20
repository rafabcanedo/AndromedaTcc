import styled from "styled-components";

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