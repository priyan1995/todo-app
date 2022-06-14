import { useEffect, useState } from "react";
import 'firebase/firestore';
import db from "../services/todoFirebaseService";


export function useTodos() {

    const database = db;

    const [todos, setTodos] = useState([]);


    useEffect(() => {

        let unsubscribe = database
            .collection('todos')
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()                        
                    }  
                })
                setTodos(data);
            })


        return () => unsubscribe();

    },[db])

   
    return todos;

}