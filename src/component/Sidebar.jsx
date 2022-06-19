import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const Sidebar = (props) => {

    const { setSelectedTodo } = useContext(TodoContext);

    const sidebarRef = useRef();

    useEffect(()=>{

       document.addEventListener('click', handleClick);
       
       return () =>  document.removeEventListener('click', handleClick);
       
    })

    const handleClick = (e) => {
        if(e.target === sidebarRef.current || sidebarRef.current.contains(e.target)){
            setSelectedTodo(undefined)
        }
    }

    return (
        <>
            <div
                className='pd-sidebar'
                ref={sidebarRef}
            >
                {props.children}
            </div>
        </>
    )
}