import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem'
import '../../style.css';

const ImageGallery = ({hits}) => (
    <ul className="ImageGallery">
        {hits.map(({ id, webformatURL, tags }) => ( 
            <li key={id}>
                <ImageGalleryItem
                    webformatURL={webformatURL}
                    tags={tags}                
                />
            </li>
        ))}
    </ul>
);

export default ImageGallery;