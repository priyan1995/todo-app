import { DatePicker, MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import React from 'react';
// import DateFnsUtils from '@date-io/date-fns';
import { Bell, CalendarDate, Clock, Palette } from 'react-bootstrap-icons';
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import LuxonUtils from '@date-io/luxon';

export const TodoForm = ({
    showButtons = false,
    heading = false,
    text, setText,
    day, setDay,
    time, setTime,
    handleSubmit,
    projects,
    todoProject, setTodoProject,
    submitButtonTitle=submitButtonTitle
}) => {

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <form onSubmit={handleSubmit} className="pd-todo-form">

                    <div className='text'>
                        {
                            heading &&
                            <h3>{heading}</h3>
                        }

                        <input
                            type='text'
                            value={text}
                            placeholder='To Do..'
                            autoFocus
                            onChange={(e) => setText(e.target.value)}

                        />
                    </div>
                    <div className='remind'>
                        <div className='title'>
                            <Bell />
                            <p>Remind Me</p>
                        </div>

                    </div>

                    <div className='pick-day'>
                        <div className='title'>
                            <CalendarDate />
                            <p>Choose a day</p>
                        </div>
                        <DatePicker
                            value={day}
                            onChange={day => setDay(day)} />
                    </div>

                    <div className='pick-time'>
                        <div className='title'>
                            <Clock />
                            <p>Choose a time</p>
                        </div>
                        <TimePicker
                            value={time}
                            onChange={time => setTime(time)}
                        />
                    </div>

                    <div className='pick-project'>
                        <div className='title'>
                            <Palette />
                            <p>Choose a project</p>
                        </div>
                        <div className='projects'>
                            {
                                projects.length > 0 ?
                                    projects.map(project =>
                                        <div
                                            className={`project ${todoProject === project.name ? 'active' : ''}`}
                                            key={project.id}
                                            onClick={() => setTodoProject(project.name)}
                                        >
                                            {project.name}
                                        </div>
                                    ) :
                                    <div style={{ color: '#ff0000' }}> Please add a project </div>
                            }
                        </div>
                    </div>

                    {
                        showButtons &&
                        <div className='confirm'>
                            <button>{submitButtonTitle}</button>
                        </div>

                    }


                </form>
            </MuiPickersUtilsProvider>



        </>
    )
}