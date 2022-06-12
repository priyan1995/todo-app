import { useEffect, useState } from "react";
import 'firebase/firestore';
import db from "../services/todoFirebaseService";


export function useProjects(todos){

    const [projects, setProjects] = useState([]);

    function calculateNumOfTodos(projectName,todos){        
        return todos.filter( todo => todo.projectName === projectName).length;
    }

    const database = db;

    useEffect(()=>{

        let unsubscribe = database
        .collection('projects')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map(doc=>{

                const projectName = doc.data().name;
                return{
                    id: doc.id,
                    name: projectName,
                    numOfTodos: calculateNumOfTodos(projectName, todos)
                }
               
            })
            setProjects(data);
        })

        return () => unsubscribe();

    },[todos])

    return projects;

}