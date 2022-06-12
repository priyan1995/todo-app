import React, { useState } from 'react';
import { ProjectForm } from './ProjectForm';

export const ProjectRename = (props) => {

    const project = props.project;

    const [newProjectName, setNewProjectName] = useState(project.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('edit success');
    }

    return (
        <>
            <div className='pr-rename-project'>
                <ProjectForm
                    handleSubmit={handleSubmit}
                    heading="Edit Project!"
                    value={newProjectName}
                    setValue={setNewProjectName}
                    setShowModal={props.setShowModal}
                    confirmButtonText="Confirm"
                />
            </div>
        </>
    )
}