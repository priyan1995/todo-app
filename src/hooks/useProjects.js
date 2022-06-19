import { useEffect, useState } from "react";
import 'firebase/firestore';
import db from "../services/todoFirebaseService";


export function useProjects(todos){

    const [projects, setProjects] = useState([]);

 

    const database = db;

    useEffect(()=>{

        let unsubscribe = database
        .collection('projects')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map(doc=>{ 

                return{
                    id: doc.id,
                    name: doc.data().name,                  
                }
               
            })
            setProjects(data);
        })

        return () => unsubscribe();

    },[])

    return projects;

}