import React, { useState } from 'react'
import ImageLightbox from './ImageLightbox'
import Modal from './Modal'
import UserDetails from './UserDetails'

const ListItem = ({ user }) => {
    const { name: { title, first, last }, picture: { thumbnail, large } } = user
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
            <p onClick={handleUserModal} className="user-name">{title}. {first} {last}</p>

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
