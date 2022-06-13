import React, { useState } from 'react';
import { TodoForm } from './TodoForm';



export const EditTodo = () => {


    const [text, setText] = useState();
    const [day, setDay] = useState();
    const [time, setTime] = useState();
    const [todoProject, setTodoProject] = useState();

    const projects = [
        { id: 1, name: "personal", numOfTodos: 0 },
        { id: 2, name: "work", numOfTodos: 1 },
        { id: 3, name: "other", numOfTodos: 2 },
    ]


    const handleSubmit = (e) => {
        console.log("submitted");
        e.preventDefault(e);
    }


    return (
        <>
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
                        submitButtonTitle="Save Todo"
                    />

                </div>
            </div>
        </>
    )
}