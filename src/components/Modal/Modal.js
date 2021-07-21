import React, { Component } from 'react';
import {createPortal} from 'react-dom';
import '../../style.css';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
    componentDidMount() {
        console.log(111);
    }

    componentWillMount() {
        console.log(333);
    }
    render() {
        return createPortal (
            <div className="Overlay">
                <div className="Modal">{this.props.children}</div>
            </div>,
            modalRoot,
        );
    };
};

export default Modal;