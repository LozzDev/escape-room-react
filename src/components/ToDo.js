import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import ToDoForm from './ToDoForm';

const ToDo = ({toDos, removeToDo, updateToDo}) => {
    
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    const submitUpdate = value => {
        updateToDo(edit.id, value);
        setEdit({
            id: null,
            value: ""
        })
    }
    
    if (edit.id){
        return <ToDoForm edit={edit} onSubmit={submitUpdate}/>
    }
    return toDos.map((toDo, index) => (
        <div key={index} className="toDo-row">
          <div key={toDo.id}>{toDo.text}</div>
          <div className="icons">
            <RiCloseCircleLine onClick={() => removeToDo(toDo.id)} className='delete-icon'/>
            <TiEdit onClick={() => setEdit({id: toDo.id, value: toDo.text})}/>
          </div>
        </div>
      ));
}

export default ToDo