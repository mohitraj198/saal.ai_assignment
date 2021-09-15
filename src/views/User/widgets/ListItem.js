import React, { useState } from 'react'
import ImageLightbox from '../../../components/ImageLightbox'
import Modal from '../../../components/Modal'
import UserDetail from './UserDetail'
import moment from 'moment'
import { formattedPhone } from "../../../libs/collectionUtils"

const ListItem = ({ user }) => {
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
                    <span className="heading">Name:</span>
                    <span onClick={handleUserModal} className="user-name-text">{title}. {first} {last}</span>
                </div>
                <div className="row user-email">
                    <span className="heading">Email:</span>
                    <span >{email}</span>
                </div>
                <div className="row user-dob">
                    <span className="heading">DOB:</span>
                    <span >
                        {moment(date).format("DD/MM/YYYY")}
                    </span>
                </div>
                <div className="row user-address">
                    <span className="heading">Address:</span>
                    <span >{number} {name}, {city} {country}, {postcode}</span>
                </div>
                <div className="row user-phone">
                    <span className="heading">Phone:</span>
                    <span >{formattedPhone(phone)}</span>
                </div>
            </div>

            <ImageLightbox
                imageUrl={large}
                isImageLightboxOpen={isImageLightboxOpen}
                setIsImageLightboxOpen={setIsImageLightboxOpen}
            />

            <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <UserDetail user={user} />
            </Modal>
        </div>
    )
}

export default ListItem
