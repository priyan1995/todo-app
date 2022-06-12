import React from 'react';
import { LogoTodo } from './UIElements/Logo';


export const User = () => {
    return (
        <>
            <div className='pd-user'>
                <LogoTodo />
                <div className='info'>
                    <p>Priyan Darshana</p>
                    <a href='#'>Logout</a>
                </div>
            </div>
        </>
    )
}