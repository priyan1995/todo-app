import React, { useRef } from 'react';

export const CustomModal = (props) => {

    const modalRef = useRef();

    const showModal = props.showModal;
    const setShowModal = props.setShowModal;

    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(false);
        }
        console.log(modalRef.current);
    }

    return (
        <>
            {showModal ? (
                <>
                    <div className='pd-modal' ref={modalRef} onClick={closeModal}>
                        <div className='container'>
                            {props.children}
                            <button onClick={() => setShowModal(false)} className="pd-modal-closebtn">
                                X
                            </button>
                        </div>
                    </div>
                </>
            ) : ''}

        </>
    )
}