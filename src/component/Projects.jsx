import React, { useState } from 'react';
import { useContext } from 'react';
import { CaretUp, Palette, PencilFill } from 'react-bootstrap-icons';
import { TodoContext } from '../context/TodoContext';
import { AddNewProjects } from './AddNewProjects';
import { Project } from './Project';

export const Projects = () => {

    const [showMenu, setShowMenu] = useState(true);
    const [edit, setEdit] = useState(false);
    const pencilColor = edit ? "#1EC94C" : "#000000"

    const { projects } = useContext(TodoContext);


    return (
        <>
            <div className='pd-projects'>
                <div className='header'>
                    <div className='title'>
                        <Palette size='18' />
                        <p>Projects</p>
                    </div>

                    <div className='btns'>
                        {
                            showMenu && projects.length > 0 &&

                            <span className='edit' onClick={() => setEdit(!edit)}>
                                <PencilFill size='15' color={pencilColor} />
                            </span>

                        }

                        <AddNewProjects />

                        <span className='arrow'>
                            <CaretUp size='20' />
                        </span>

                    </div>
                </div>

                <div className='items'>

                    {
                        projects.map(project => 
                            <Project
                                project={project}
                                key={project.id}
                                edit={edit}
                            />
                        )
                    }

                </div>

            </div>
        </>
    )
}