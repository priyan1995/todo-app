import React from 'react';

export const Sidebar = (props) => {
    return(
        <>
            <div className='pd-sidebar'>
                {props.children}
            </div>
        </>
    )
}