import { useState, KeyboardEvent } from "react";
import { Container } from "./styles";

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
   if(e.code === 'Enter' && inputText !== '') {
    onEnter(inputText);
    setInputText('');
   }
  }
 return(
  <Container>
    <div className="image-plus">➕</div>
    <input 
     type="text"
     placeholder="Adicione uma Tarefa..."
     value={inputText}
     onChange={e=>setInputText(e.target.value)}
     onKeyUp={handleKeyUp}
    />
  </Container>
 );
}