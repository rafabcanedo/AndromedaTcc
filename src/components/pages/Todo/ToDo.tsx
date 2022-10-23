import React, { useState } from 'react';
import { Area, Container, Header } from './styles';

import { Item } from '../../../types/Item';
import { ListItem } from './ListItem/index';
import { AddArea } from './AddArea';

function ToDo() {
  
  const [ list, setList ] = useState<Item[]>([
    { id: 1, name: 'Ir no mercado', done: false },
    { id: 2, name: 'Fazer um macarrao', done: false},
  ]);

  const handleAddTask = (taskName: string) => {
   let newList = [...list];
   newList.push({
    id: list.length + 1,
    name: taskName,
    done: false
   });
   setList(newList);
  }

 return(
  <Container>
   <Area>
    <Header>
      Lista de Tarefas
    </Header>

    <AddArea onEnter={handleAddTask} />

    {list.map((item, index) => (
      <ListItem key={index} item={item} />
    ))}
   </Area>
  </Container>
 );
}

export default ToDo;