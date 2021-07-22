import React from 'react';
import '../../style.css';

const ImageGalleryItem = ({webformatURL, tags}) => (
    <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
);
export default ImageGalleryItem;
