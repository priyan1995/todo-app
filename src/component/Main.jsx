import React from 'react';

export const Main = (props) => {
    return (
        <>
            <div className='pd-main'>
                {props.children}
            </div>
        </>
    )
}