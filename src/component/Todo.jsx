import moment from 'moment';
import React, { useState } from 'react';
import { useContext } from 'react';
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from 'react-bootstrap-icons';
import { useSpring, animated, useTransition } from 'react-spring';
import { TodoContext } from '../context/TodoContext';
import db from '../services/todoFirebaseService';

export const Todo = (props) => {

    const { setSelectedTodo, selectedTodo } = useContext(TodoContext);

    const todo = props.todo;

    const [hover, setHover] = useState(false);

    const deleteTodo = (todo) => {
        db
            .collection('todos')
            .doc(todo.id)
            .delete()
    }


    const handleDelete = (todo) => {
        deleteTodo(todo);

        if (selectedTodo === todo) {
            setSelectedTodo(undefined);
        }
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

    const todoLoadAnimation = useSpring({
        from: { marginTop: '-12px', opacity: 0 },
        to: { marginTop: '-0px', opacity: 1 }
    })

    const buttonCheckTransitions = useTransition(todo.checked, {
        from: { position: 'absolute', transform: 'scale(0)' },
        enter: { transform: 'scale(1)' },
        leave: { transform: 'scale(0)' }
    })


    return (
        <>
            <animated.div
                className='todo'
                style={todoLoadAnimation}

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

                            buttonCheckTransitions((props,checked) =>
                                checked ?
                                    <animated.span
                                        className='checked'
                                        style={props}

                                    >
                                        <CheckCircleFill color='#bebebe' />
                                    </animated.span>

                                    :

                                    <animated.span
                                        className='unchecked'
                                        style={props}

                                    >
                                        <Circle color={todo.color} />
                                    </animated.span>
                            )

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
                        onClick={() => handleDelete(todo)}
                    >
                        {
                            (hover || todo.checked) &&
                            <span>
                                <Trash />
                            </span>
                        }
                    </div>

                </div>
            </animated.div>
        </>
    )
}