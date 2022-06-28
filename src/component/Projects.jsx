import React, { useState } from 'react';
import { useContext } from 'react';
import { CaretUp, Palette, PencilFill } from 'react-bootstrap-icons';
import { useSpring, animated } from 'react-spring';
import { TodoContext } from '../context/TodoContext';
import { AddNewProjects } from './AddNewProjects';
import { Project } from './Project';

export const Projects = () => {

    const [showMenu, setShowMenu] = useState(true);
    const [edit, setEdit] = useState(false);
    const pencilColor = edit ? "#1EC94C" : "#000000"

    const { projects } = useContext(TodoContext);

    const projectSpin = useSpring({
        transform: showMenu ? 'rotate(0deg)' : 'rotate(180deg)',
        config: { friction: 10 }
    })

    const projectMenu = useSpring({
        display: showMenu ? 'block' : 'none',
        lineHeight: showMenu ? 1.2 : 0
    })


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

                        <animated.span
                            className='arrow'
                            style={projectSpin}
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <CaretUp size='20' />
                        </animated.span>

                    </div>
                </div>

                <animated.div
                    className='items'
                    style={projectMenu}
                >

                    {
                        projects.map(project =>
                            <Project
                                project={project}
                                key={project.id}
                                edit={edit}
                            />
                        )
                    }

                </animated.div>

            </div>
        </>
    )
}