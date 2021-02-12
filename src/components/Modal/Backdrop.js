import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => (
    <div onClick={props.onModalClose} className="Backdrop"></div>
)

export default Backdrop;