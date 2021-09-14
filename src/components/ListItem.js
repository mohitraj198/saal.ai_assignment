import React, { useState } from 'react'
import ImageLightbox from './ImageLightbox'
import Modal from './Modal'
import UserDetails from './UserDetails'
import Moment from 'react-moment';

const ListItem = ({ user }) => {
    // User's Details
    const {
        picture: { thumbnail, large },
        name: { title, first, last },
        email,
        location: {
            street: { number, name },
            city,
            country,
            postcode
        },
        dob: { date },
        phone
    } = user

    // Formatting Mobile Number(Remove hyphen)
    const formattedPhone = phone.replace(/-/g, "")

    const [isImageLightboxOpen, setIsImageLightboxOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Lightbox Handler
    const handleLightbox = () => {
        setIsImageLightboxOpen(true)
    }

    // Modal Handler for User
    const handleUserModal = () => {
        setIsModalOpen(true)
    }

    return (
        <div className="list_item">
            <img onClick={handleLightbox} className="user-thumbnail" src={thumbnail} alt="User's Profile" />
            <div className="content">
                <div className="row user-name">
                    <p className="heading">Name:</p>
                    <p onClick={handleUserModal} className="">{title}. {first} {last}</p>
                </div>
                <div className="row user-email">
                    <p className="heading">Email:</p>
                    <p className="">{email}</p>
                </div>
                <div className="row user-dob">
                    <p className="heading">DOB:</p>
                    <p className="">
                        <Moment format="DD/MM/YYYY">
                            {date}
                        </Moment>
                    </p>
                </div>
                <div className="row user-address">
                    <p className="heading">Address:</p>
                    <p className="">{number} {name}, {city} {country}, {postcode}</p>
                </div>
                <div className="row user-phone">
                    <p className="heading">Phone:</p>
                    <p className="">{formattedPhone}</p>
                </div>
            </div>

            <ImageLightbox
                imageUrl={large}
                isImageLightboxOpen={isImageLightboxOpen}
                setIsImageLightboxOpen={setIsImageLightboxOpen}
            />

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <UserDetails user={user} />
            </Modal>
        </div>
    )
}

export default ListItem
