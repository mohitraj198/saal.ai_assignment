import React from 'react'

const Modal = ({ user, isUserModalOpen, setIsUserModalOpen }) => {
    const {
        name: { title, first, last },
        picture: { large },
        email,
        gender,
        location: {
            street: { number, name },
            city,
            state,
            country,
            postcode
        },
        dob: { date },
        phone,
    } = user

    const newDate = new Date(date)
    const formateDate = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`

    return (
        <div className={isUserModalOpen ? "user-modal open" : "user-modal"}>
            <button onClick={() => setIsUserModalOpen(false)}>
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>

            <div className="modal-container">
                <div className="modal-left">
                    <img src={large} alt="Profile" />
                    <p className="modal-user-name">{title}. {first} {last}</p>
                    <p className="modal-user-email">{email}</p>
                </div>
                <div className="modal-right">
                    <div className="row">
                        <p className="heading">Gender</p>
                        <p className="detail">{gender}</p>
                    </div>
                    <div className="row">
                        <p className="heading">Address</p>
                        <p className="detail">{number} {name}, {city}, {state}, {country}</p>
                    </div>
                    <div className="row">
                        <p className="heading">Post Code</p>
                        <p className="detail">{postcode}</p>
                    </div>
                    <div className="row">
                        <p className="heading">DOB</p>
                        <p className="detail">{formateDate}</p>
                    </div>
                    <div className="row">
                        <p className="heading">Phone</p>
                        <p className="detail">{phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
