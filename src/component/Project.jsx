import React, { useContext, useState } from 'react';
import { Pencil, XCircle } from 'react-bootstrap-icons';
import { useSpring, animated, useTransition } from 'react-spring';
import { TodoContext } from '../context/TodoContext';
import db from '../services/todoFirebaseService';
import { ProjectRename } from './ProjectRename';
import { CustomModal } from './UIElements/Modal';

export const Project = (props) => {

    const { defaultProject, selectedProject, setSelectedProject } = useContext(TodoContext);

    const [showModal, setShowModal] = useState(false);

    const project = props.project;

    const edit = props.edit;

    console.log(edit)

    const projectLoadAnimation = useSpring({
        from: { marginTop: '-12px', opacity: 0 },
        to: { marginTop: '-0px', opacity: 1 }
    })

    const buttonTransitions = useTransition(edit, {
        from: { opacity: 0, right: '-20px' },
        enter: { opacity: 1, right: '0px' },
        leave: { opacity: 0, right: '-20px' }
    })

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
            <animated.div
                className='pd-project'
                style={projectLoadAnimation}
            >

                <div
                    className='name'
                    onClick={() => setSelectedProject(project.name)}
                >
                    {project.name}
                </div>

                <div className='btns'>
                    {

                        buttonTransitions((props, editProject) =>
                            editProject ?
                                <animated.div style={props} className='edit-delete'>
                                    <span className='edit' onClick={() => setShowModal(true)}>
                                        <Pencil size="13" />
                                    </span>
                                    <span
                                        className='delete'
                                        onClick={() => deleteProject(project)}
                                    >
                                        <XCircle size="13" />
                                    </span>
                                </animated.div>
                                :
                                project.numOfTodos === 0 ?
                                    ""
                                    :
                                    <animated.div style={props} className='total-todos'>
                                        {project.numOfTodos}
                                    </animated.div>

                        )

                    }

                </div>

                <CustomModal showModal={showModal} setShowModal={setShowModal} >
                    <ProjectRename
                        project={project}
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />
                </CustomModal>

            </animated.div>
        </>
    )
}