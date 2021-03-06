import React, { Component } from 'react';
import {createPortal} from 'react-dom';
import '../../style.css';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
    componentDidMount() {
        // console.log(111);

        window.addEventListener('keydown', this.handleKeyDown)
    };

    componentWillUnmount() {
        // console.log(333);

        window.removeEventListener('keydown', this.handleKeyDown)
    };

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        };
    };

    handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        };
    };

    render() {
        return createPortal (
            <div className="Overlay" onClick={this.handleOverlayClick}>
                <div className="Modal">{this.props.children}</div>
            </div>,
            modalRoot,
        );
    };
};

export default Modal;