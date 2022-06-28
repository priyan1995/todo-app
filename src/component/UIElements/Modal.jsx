import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';

export const CustomModal = (props) => {

    const modalRef = useRef();

    const showModal = props.showModal;
    const setShowModal = props.setShowModal;

    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(false);
        }
    }

    const modalAnimation = useSpring({
        opacity: showModal ? 1 : 0,
        top: showModal ? '25%' : '0',
        config: { friction: 10 }
    })

    return (
        <>
            {showModal ? (
                <>
                
                    <div className='pd-modal' ref={modalRef} onClick={closeModal}>
                        <animated.div className='container' style={modalAnimation}>
                            {props.children}
                            <button onClick={() => setShowModal(false)} className="pd-modal-closebtn">
                                X
                            </button>
                        </animated.div>
                    </div>
                </>
            ) : ''}

        </>
    )
}