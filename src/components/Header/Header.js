import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-name'>
                <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                <h1 className='name'>Health Line Everyone</h1>
            </div>
        </div>
    );
};

export default Header;