import React from 'react';
import PropTypes from 'prop-types';
import '../../style.css';

const Button = ({ onClick }) => (
    <button className="Button" type="button" onClick={onClick}>
        Load more
    </button>
    );


Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;