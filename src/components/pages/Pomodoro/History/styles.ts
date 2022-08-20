import styled from "styled-components";

export const HistoryContainer = styled.main`
 flex: 1;
 padding: 3.5rem;
 
 display: flex;
 flex-direction: column;

 h1 {
  font-size: 1.5rem;
  color: #E1E1E6;
 }
`;

export const HistoryList = styled.div`
 flex: 1;
 overflow: auto;
 margin-top: 2rem;

 table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

  th {
   background-color: #323238;
   padding: 1rem;
   text-align: left;
   color: #E1E1E6;
   font-size: 0.875rem;
   line-height: 1.6;

   &:first-child {
    border-top-left-radius: 8px;
    padding-left: 1.5rem;
   }

   &:last-child {
    border-top-right-radius: 8px;
    padding-right: 1.5rem
   }
  }

  td {
    background-color: #29292E;
    border-top: 4px solid #202024;
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;
    color: white;

   &:first-child {
    width: 50%;
    padding-left: 1.5rem;
   }

   &:last-child {
    padding-right: 1.5rem
   }
  }
 }
`;

// no lugar do decimal vai ser colocado o nome das variaveis das cores
const STATUS_COLORS = {
  yellow: '#ffc93c', 
  green: '#42b883',
  red: '#dc2f2f',
} as const

interface StatusProps {
 statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
 display: flex;
 align-items: center;
 gap: 0.5rem;

 &::before {
   content: '';
   width: 0.5rem;
   height: 0.5rem;
   border-radius: 9999px;
   background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
 }
`;