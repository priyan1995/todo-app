import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoForm } from './TodoForm';
import { CustomModal } from './UIElements/Modal';

export const AddNewTodo = () => {

    const {selectedProject} = useContext(TodoContext);

    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState();
    const [day, setDay] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [todoProject, setTodoProject] = useState();
    

    const projects = [
        { id: 1, name: "personal", numOfTodos: 0 },
        { id: 2, name: "work", numOfTodos: 1 },
        { id: 3, name: "other", numOfTodos: 2 },
    ]   

    const handleSubmit = (e) => {
        console.log("submitted");
        e.preventDefault();
    }

    useEffect(()=>{
        setTodoProject(selectedProject);
    },[selectedProject])


    return (
        <>
            <div className='pd-add-new-todo'>

                <div className='btn' >
                    <button onClick={() => setShowModal(true)}> + New Todo</button>
                </div>

                <CustomModal showModal={showModal} setShowModal={setShowModal}>

                    <TodoForm
                        handleSubmit={handleSubmit}
                        heading="Add New Todo"
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

                </CustomModal>
            </div>

        </>
    )
}