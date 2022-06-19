import React, { useState } from 'react';
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from 'react-bootstrap-icons';
import db from '../services/todoFirebaseService';

export const Todo = (props) => {

    const todo = props.todo;

    const [hover, setHover] = useState(false);

    const deleteTodo = (todo) =>{
        db
        .collection('todos')
        .doc(todo.id)
        .delete()
    }

    const checkTodo = (todo) => {
      db
      .collection('todos')
      .doc(todo.id)
      .update({
        checked: !todo.checked
      })  
    }

    return (
        <>
            <div className='todo'>
                <div
                    className='todo-container'
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <div 
                    className='check-todo'
                    onClick={()=>checkTodo(todo)}
                    >
                        {
                            todo.checked ?
                                <span className='checked'>
                                    <CheckCircleFill color='#bebebe' />
                                </span>

                                :

                                <span className='unchecked'>
                                    <Circle color={todo.color} />
                                </span>
                        }
                    </div>

                    <div className='text'>
                        <p>{todo.text}</p>
                        <span>{todo.time} - {todo.projectName}</span>
                        <div className={`line ${todo.checked ? 'line-through' : ''}`} />
                    </div>

                    <div className='add-to-next-day'>
                        {
                            todo.checked &&
                            <span>
                                <ArrowClockwise />
                            </span>
                        }
                    </div>

                    <div className='delete-todo'
                        onClick={() => deleteTodo(todo)}
                    >
                        {
                            (hover || todo.checked) &&
                            <span>
                                <Trash />
                            </span>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}