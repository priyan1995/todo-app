import React from 'react';

export const ProjectForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit} className="pd-project-form">
                <h3>{props.heading}</h3>

                <input
                    value={props.value}
                    onChange={(e) => props.setValue(e.target.value)}
                    type="text"
                    placeholder='Project Name...'
                    autoFocus
                />

                <button className='cancel' role='button' onClick={()=>props.setShowModal(false)}>Cancel</button>
                <button className='confirm'>{props.confirmButtonText}</button>


            </form>
        </>
    )
}