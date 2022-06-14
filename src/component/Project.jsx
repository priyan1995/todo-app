import React, { useContext, useState } from 'react';
import { Pencil, XCircle } from 'react-bootstrap-icons';
import { TodoContext } from '../context/TodoContext';
import { ProjectRename } from './ProjectRename';
import { CustomModal } from './UIElements/Modal';

export const Project = (props) => {

    const { setSelectedProject } = useContext(TodoContext);

    const [showModal, setShowModal] = useState(false);
    const project = props.project;

    //console.log(project)

    return (
        <>
            <div className='pd-project'>

                <div 
                className='name'
                onClick={()=> setSelectedProject(project.name)}
                >
                    {project.name}
                </div>

                <div className='btns'>
                    {
                        props.edit ?
                            <div className='edit-delete'>
                                <span className='edit' onClick={() => setShowModal(true)}>
                                    <Pencil size="13" />
                                </span>
                                <span className='delete'>
                                    <XCircle size="13" />
                                </span>
                            </div>
                            :
                            project.numOfTodos === 0 ?
                                ""
                                :
                                <div className='total-todos'>
                                    {project.numOfTodos}
                                </div>
                    }

                </div>

                <CustomModal showModal={showModal} setShowModal={setShowModal} >
                    <ProjectRename
                        project={project}
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />
                </CustomModal>

            </div>
        </>
    )
}