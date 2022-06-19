import moment from 'moment';
import React, { useState } from 'react';
import { useContext } from 'react';
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from 'react-bootstrap-icons';
import { TodoContext } from '../context/TodoContext';
import db from '../services/todoFirebaseService';

export const Todo = (props) => {

    const { setSelectedTodo,selectedTodo } = useContext(TodoContext);

    const todo = props.todo;

    const [hover, setHover] = useState(false);

    const deleteTodo = (todo) => {
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

    const addNextDay = (todo) => {
        const nextDate = moment(todo.date, 'MM/DD/YYYY').add(1, 'days');

        const repeatedTodo = {
            ...todo,
            checked: false,
            date: nextDate.format('MM/DD/YYYY'),
            day: nextDate.format('d')
        }

        delete repeatedTodo.id

        db
            .collection('todos')
            .add(repeatedTodo)
    }

    const handleSelectedTodo = (todo) => {
        setSelectedTodo(todo);
        console.log(selectedTodo)
    }

    return (
        <>
            <div
                className='todo'
              
            >
                <div
                    className='todo-container'
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <div
                        className='check-todo'
                        onClick={() => checkTodo(todo)}
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

                    <div
                     className='text'
                     onClick={() => handleSelectedTodo(todo)}
                     >
                        <p>{todo.text}</p>
                        <span>{todo.time} - {todo.projectName}</span>
                        <div className={`line ${todo.checked ? 'line-through' : ''}`} />
                    </div>

                    <div
                        className='add-to-next-day'
                        onClick={() => addNextDay(todo)}
                    >
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