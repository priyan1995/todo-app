import React, { useState } from 'react';
import db from '../services/todoFirebaseService';
import { ProjectForm } from './ProjectForm';

export const ProjectRename = ({project,setShowModal }) => {


    const [newProjectName, setNewProjectName] = useState(project.name);

    const renameProject = (project,newProjectName) => {

        const projectRef = db.collection('projects');
        const todosRef = db.collection('todos');

        const { name: oldProjectName } = project;

        projectRef
        .where('name','==',newProjectName)
        .get()
        .then( querySnapshot=>{
            if(!querySnapshot.empty){
                alert('Project with the same name already exist!');
            }else{
                projectRef
                .doc(project.id)
                .update({
                    name:newProjectName
                })
                .then( ()=>{
                    todosRef
                    .where('projectName','==',oldProjectName)
                    .get()
                    .then( querySnapshot => {
                        querySnapshot.forEach( doc =>{
                            doc.ref.update({
                                projectName: newProjectName
                            })
                        })
                    } )
                } )
            }
        } )

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        renameProject(project,newProjectName);

        setShowModal(false);

    }

    return (
        <>
            <div className='pr-rename-project'>
                <ProjectForm
                    handleSubmit={handleSubmit}
                    heading="Edit Project!"
                    value={newProjectName}
                    setValue={setNewProjectName}
                    setShowModal={setShowModal}
                    confirmButtonText="Confirm"
                />
            </div>
        </>
    )
}