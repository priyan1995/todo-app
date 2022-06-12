import React, { useContext } from 'react';
import { CalendarDate, CaretUp } from 'react-bootstrap-icons';
import { TodoContext } from '../context/TodoContext';

export const Calendar = () => {

    const { setSelectedProject } = useContext(TodoContext);

    const calendarItems = ['today', 'next 7 days', 'all days'];
    return (
        <>
            <div className='calendar'>
                <div className='header'>
                    <div className='title'>
                        <p>Calendar</p>
                        <CalendarDate size='18' />
                    </div>
                    <div className='btns'>
                        <span>
                            <CaretUp size='20' />
                        </span>
                    </div>
                </div>

                <div className='items'>
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
                </div>

            </div>
        </>
    )
}