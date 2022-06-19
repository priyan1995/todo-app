import React, { useState } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoForm } from './TodoForm';



export const EditTodo = () => {


    const [text, setText] = useState();
    const [day, setDay] = useState();
    const [time, setTime] = useState();
    const [todoProject, setTodoProject] = useState();

    const { selectedTodo, projects } = useContext(TodoContext);


    const handleSubmit = (e) => {
        console.log("submitted");
        e.preventDefault(e);
    }


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
                            showButtons={true}
                            todoProject={todoProject}
                            setTodoProject={setTodoProject}
                        />

                    </div>
                </div>


            }
        </>
    )
}