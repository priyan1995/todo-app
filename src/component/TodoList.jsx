import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { Todo } from './Todo';
import { TodoNext7Days } from './TodoNext7Days';


export const TodoList = () => {

    const { todos, selectedProject } = useContext(TodoContext);

    // const todos = [
    //     {
    //         id: 'd54sd4',
    //         text: "Go for a run",
    //         time: "10:00 AM",
    //         date: "06/03/2021",
    //         day: "6",
    //         checked: false,
    //         color: '#00ff00',
    //         project: 'personal'
    //     },
    //     {
    //         id: 'd54fdf',
    //         text: "Meeting",
    //         time: "09:00 AM",
    //         date: "08/03/2021",
    //         day: "1",
    //         checked: true,
    //         color: '#00ff00',
    //         project: 'work'
    //     }
    // ]

    return (
        <div className='pd-todo-list'>
            <div className="selected-project">
                {selectedProject}
            </div>
            <div className='todos'>
                {
                    selectedProject === 'next 7 days' ?
                        <TodoNext7Days todos={todos} />
                        :
                        todos.map(todo =>
                            <Todo todo={todo} key={todo.key} />
                        )
                }
            </div>
        </div>
    )
}