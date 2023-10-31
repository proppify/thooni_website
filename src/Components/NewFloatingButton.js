import React from 'react';
import '../Styles/NewFloatingButton.css';
import WhatsAppButton from '../Assets/WhatsApp.svg';

const NewFloatingButton = ({onclickFunc}) => {
    return (
        <div className="floating-button">
            <a href={onclickFunc} target='_blank' rel='noreferrer'>
            <img src={WhatsAppButton} alt='WhatsAppButton' />
            </a>
        </div>
    )
}

export default NewFloatingButton;