import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo';

const ToDoList = () => {

    const [toDos, setToDos] = useState([]);

    const addToDo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...toDos]

        setToDos(newTodos)
    }

    const removeToDo = id => {
        const removeArr = [...toDos].filter(toDo => toDo.id !== id);
        setToDos(removeArr);
    }

    const updateToDo = (toDoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
      
        setToDos((prev) =>
          prev.map((item) => (item.id === toDoId ? newValue : item))
        );
      };

  return (
    <div>
        <h1>plan for today?</h1>
        <ToDoForm onSubmit={addToDo}/>
        <ToDo toDos={toDos} removeToDo={removeToDo} updateToDo={updateToDo}/>
    </div>
  )
}

export default ToDoList