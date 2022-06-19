import moment from 'moment';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import db from '../services/todoFirebaseService';
import { TodoForm } from './TodoForm';



export const EditTodo = () => {


    const [text, setText] = useState('');
    const [day, setDay] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [todoProject, setTodoProject] = useState('');

    const { selectedTodo, projects } = useContext(TodoContext);


    const handleSubmit = (e) => {
        console.log("submitted");
        e.preventDefault(e);
    }

    useEffect(() => {

        if (selectedTodo) {
            setText(selectedTodo.text);
            setDay(moment(selectedTodo.date, 'MM/DD/YYYY'))
            setTime(moment(selectedTodo.time, 'hh:mm A'))
            setTodoProject(selectedTodo.projectName)
        }

    }, [selectedTodo])

    useEffect(() => {
        if (selectedTodo) {
            db
                .collection('todos')
                .doc(selectedTodo.id)
                .update({
                    text: text,
                    date: moment(day).format('MM/DD/YYYY'),
                    day: moment(day).format('d'),
                    time: moment(time).format('hh:mm A'),
                    projectName: todoProject,
                })
        }

    }, [text, day, time, todoProject])


    return (
        <>

            {
                selectedTodo &&
                <div className='pd-edit-todo'>
                    <div className='header'>
                        Edit Todo
                    </div>
                    <div className='container'>
                        <TodoForm
                            handleSubmit={handleSubmit}
                            text={text}
                            setText={setText}
                            day={day}
                            setDay={setDay}
                            time={time}
                            setTime={setTime}
                            projects={projects}
                            showButtons={false}
                            todoProject={todoProject}
                            setTodoProject={setTodoProject}
                        />

                    </div>
                </div>


            }
        </>
    )
}