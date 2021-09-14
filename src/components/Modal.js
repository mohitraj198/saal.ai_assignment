import React from 'react'

const Modal = (props) => {
    const { isModalOpen, setIsModalOpen } = props
    return (
        <div className={isModalOpen ? "modal open" : "modal"}>
            <button onClick={() => setIsModalOpen(false)}>
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>

            <div className="modal-container">
                {props.children}
            </div>
        </div>
    )
}

export default Modal
