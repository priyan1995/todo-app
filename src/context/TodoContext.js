import React, { createContext, useState } from 'react';
import { useFilterTodos } from '../hooks/useFilterTodos';
import { useProjects } from '../hooks/useProjects';
import { useTodos } from '../hooks/useTodos';

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

    const defaultProject = 'today';
    const [selectedProject, setSelectedProject] = useState(defaultProject);
    const todos = useTodos();
    const projects = useProjects(todos);
    const filteredTodos = useFilterTodos(todos,selectedProject);

  


    return (
        <TodoContext.Provider
            value={
                {
                    selectedProject,
                    setSelectedProject,
                    todos:filteredTodos,
                    projects
                }
            }>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext }