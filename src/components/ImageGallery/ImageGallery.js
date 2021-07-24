import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import '../../style.css';


const ImageGallery = ({ hits, onOpenModalImg }) => {
    return (
        <ul className="ImageGallery">
            {hits.map(({ id, webformatURL, largeImageURL }) => {
                const handleImgClick = () => onOpenModalImg(largeImageURL);
                return (
                    <li key={id}>
                        <ImageGalleryItem
                            webformatURL={webformatURL}
                            onClick={handleImgClick}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

ImageGallery.propTypes = {
    hits: PropTypes.array.isRequired,
    onOpenModalImg: PropTypes.func.isRequired,
};

export default ImageGallery;