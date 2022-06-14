import { useEffect, useState } from "react";
import 'firebase/firestore';
import db from "../services/todoFirebaseService";
import moment from "moment";


export function useFilterTodos(todos, selectedProject) {

    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        let data;

        const todayDateFormatted = moment().format('MM/DD/YYYY');

        if (selectedProject === 'today') {
            data = todos.filter(todo => todo.date === todayDateFormatted)
        } else if (selectedProject === 'next 7 days') {
            data = todos.filter(todo => {
                const todoDate = moment(todo.date, 'MM/DD/YYYY');
                const todayDate = moment(todayDateFormatted, 'MM/DD/YYYY');
                const diffDays = todoDate.diff(todayDate, 'days')

                return diffDays >= 0 && diffDays < 7
            })
        } else if (selectedProject === 'all days') {
            data = todos;
        } else {
            data = todos.filter(todo => todo.projectName === selectedProject)
        }
        setFilteredTodos(data);



    }, [todos, selectedProject])


    return filteredTodos;

}