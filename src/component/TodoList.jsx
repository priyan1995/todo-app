import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { Todo } from './Todo';
import { TodoNext7Days } from './TodoNext7Days';


export const TodoList = () => {

    const { todos, selectedProject } = useContext(TodoContext);

    
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
                            <Todo todo={todo} key={todo.id} />
                        )
                }
            </div>
        </div>
    )
}