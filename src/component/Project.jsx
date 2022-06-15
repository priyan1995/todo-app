import React, { useContext, useState } from 'react';
import { Pencil, XCircle } from 'react-bootstrap-icons';
import { TodoContext } from '../context/TodoContext';
import db from '../services/todoFirebaseService';
import { ProjectRename } from './ProjectRename';
import { CustomModal } from './UIElements/Modal';

export const Project = (props) => {

    const { defaultProject,selectedProject,setSelectedProject } = useContext(TodoContext);

    const [showModal, setShowModal] = useState(false);
    const project = props.project;

    const deleteProject = (project) => {
        db
            .collection('projects')
            .doc(project.id)
            .delete()
            .then(() => {
                db
                    .collection('todos')
                    .where('projectName', '==', project.name)
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach(doc => {
                            doc.ref.delete()
                        })
                    })
            })
            .then(() => {
                if (selectedProject === project.name) {
                    setSelectedProject(defaultProject)
                }
            })
    }


    return (
        <>
            <div className='pd-project'>

                <div
                    className='name'
                    onClick={() => setSelectedProject(project.name)}
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
                                <span
                                    className='delete'
                                    onClick={() => deleteProject(project)}
                                >
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