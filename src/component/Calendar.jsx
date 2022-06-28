import React, { useContext } from 'react';
import { useState } from 'react';
import { CalendarDate, CaretUp } from 'react-bootstrap-icons';
import { useSpring, animated } from 'react-spring';
import { TodoContext } from '../context/TodoContext';

export const Calendar = () => {

    const { setSelectedProject } = useContext(TodoContext);

    const [showMenu, setShowMenu] = useState(true);

    const calendarItems = ['today', 'next 7 days', 'all days'];

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
            <div className='calendar'>
                <div className='header'>
                    <div className='title'>
                        <p>Calendar</p>
                        <CalendarDate size='18' />
                    </div>
                    <div className='btns'>
                        <animated.span
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
                        calendarItems.map(item =>
                            <div
                                className='item'
                                key={item}
                                onClick={() => setSelectedProject(item)}
                            >
                                {item}
                            </div>
                        )
                    }
                </animated.div>

            </div>
        </>
    )
}