import React from 'react'

/**
 * @componentName ImageLightbox
 * @description display the image lightbox
 */

const ImageLightbox = ({ setIsImageLightboxOpen, isImageLightboxOpen, imageUrl }) => {
    return (
        <div className={isImageLightboxOpen ? "image-lightbox open" : "image-lightbox"}>
            <img src={imageUrl} alt="Profile Lightbox" />
            <button onClick={() => setIsImageLightboxOpen(false)}>
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default ImageLightbox
