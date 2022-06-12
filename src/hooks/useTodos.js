import { useEffect, useState } from "react";
import 'firebase/firestore';
import { todoServiceFirebase } from "../services/todoFirebaseService";

import firebase from 'firebase/app';

export function useTodos() {


    // todoServiceFirebase();

    // const db = firebase.firestore();

    const [todos, setTodos] = useState([]);

    // useEffect(() => {

    //     let unsubscribe = db
    //         .collection('todos')
    //         .onSnapshot(snapshot => {
    //             const data = snapshot.docs.map(doc => {
    //                 return {
    //                     id: doc.id,
    //                     ...doc.data()
    //                 }
    //                 setTodos(data);
    //             })
    //         })


    //     return () => unsubscribe();

    // }, [])

    // useEffect(() => {
    //     if (db) {

    //         const unsubscribe = db
    //             .collection('todos')
    //             .onSnapshot(querySnapshot => {
    //                 const data = querySnapshot.docs.map(doc => ({
    //                     ...doc.data(),
    //                     id: doc.id,
    //                 }));
    //                 setTodos(data);
    //             })


    //         return unsubscribe
    //     }
    // }, [db]);

    return todos;

}