import React, { useState } from 'react'
import ImageLightbox from './ImageLightbox'
import Modal from './Modal'

const ListItem = ({ user }) => {
    const { name: { title, first, last }, picture: { thumbnail, large } } = user
    const [isImageLightboxOpen, setIsImageLightboxOpen] = useState(false)
    const [isUserModalOpen, setIsUserModalOpen] = useState(false)

    const handleLightbox = () => {
        setIsImageLightboxOpen(true)
    }

    const handleUserModal = () => {
        setIsUserModalOpen(true)
    }

    return (
        <div className="user-list_item">
            <img onClick={handleLightbox} className="user-thumbnail" src={thumbnail} alt="User's Profile" />
            <p onClick={handleUserModal} className="user-name">{title}. {first} {last}</p>

            <ImageLightbox
                imageUrl={large}
                isImageLightboxOpen={isImageLightboxOpen}
                setIsImageLightboxOpen={setIsImageLightboxOpen}
            />

            <Modal
                user={user}
                isUserModalOpen={isUserModalOpen}
                setIsUserModalOpen={setIsUserModalOpen}
            />
        </div>
    )
}

export default ListItem
