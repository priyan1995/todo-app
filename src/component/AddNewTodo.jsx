import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoForm } from './TodoForm';
import { CustomModal } from './UIElements/Modal';
import db from "../services/todoFirebaseService";
import moment from 'moment';
import { format } from 'date-fns';
import randomColor from 'randomcolor';

export const AddNewTodo = () => {

    const { projects,selectedProject } = useContext(TodoContext);

    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState();
    const [day, setDay] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [todoProject, setTodoProject] = useState(selectedProject);



    const handleSubmit = (e) => {
        console.log("submitted");
        e.preventDefault();

        if(text ){
            db
            .collection('todos')
            .add(
                {
                    text:text,
                    date:moment(day).format('MM/DD/YYYY'),
                    day: moment(day).format('d'),
                    time:moment(time).format('hh:mm A'),
                    projectName: todoProject,
                    checked:false,
                    color:randomColor()

                }
            )

            setShowModal(false);
            setText('');
            setDay(new Date());
            setTime(new Date());
        }
    }

    useEffect(() => {
        setTodoProject(selectedProject);
    }, [selectedProject])


    return (
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
                    submitButtonTitle="+ Add Todo"
                />

            </CustomModal>
        </div>

    )
}