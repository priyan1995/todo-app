import React, { createContext, useState } from 'react';
import { useProjects } from '../hooks/useProjects';
import { useTodos } from '../hooks/useTodos';

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

    const defaultProject = 'today';
    const [selectedProject, setSelectedProject] = useState(defaultProject);
    // const todos = useTodos();
    // const projects = useProjects(todos);

  


    return (
        <TodoContext.Provider
            value={
                {
                    selectedProject,
                    setSelectedProject,
                    // todos,
                    // projects
                }
            }>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext }