import React from 'react';
import './imageGallery.css';

const ImageGallery = (props) => {
    return(
        <div className="image-container">
            {props.data.map(url => (
                <img className="img" alt="some-img" src={url} />
            ))}
        </div>
    )
}

export default ImageGallery;