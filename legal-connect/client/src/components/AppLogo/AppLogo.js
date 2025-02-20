import React from 'react';
import { useNavigate } from 'react-router-dom';
import myLogo from '../../assets/legallogo.png';
import './AppLogo.css';

const AppLogo = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/'); 
    };

    return (
        <div className="applogo">
            <img
                src={myLogo}
                alt="App Logo"
                className="app-logo"
                onClick={handleLogoClick}
                style={{ cursor: 'pointer' }} 
            />
        </div>
    );
};

export default AppLogo;
