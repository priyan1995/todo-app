import { useEffect, useState } from "react";
import 'firebase/firestore';
import db from "../services/todoFirebaseService";

export function useProjectsWithStats(projects, todos) {

    const [projectsWithStats, setProjectsWithStats] = useState([]);


    useEffect(() => {
        const data = projects.map((project) =>{
            return{
                numOfTodos: todos.filter(todo => todo.projectName === project.name && !todo.checked).length,
                ...project
            }
        })



            setProjectsWithStats(data);
    }, [projects, todos])

    return projectsWithStats;

}