import React from 'react';
import logo from '../../../images/logo.webp';
import man from '../../../images/namelogo.webp';
import './header.css';
const Header = () => {
    return (
        <div className='max-width header'>
            <img className='headerLogo' src={logo} alt="logo" />
            <div className='header-right'>
                <div className='header-location-search-container'>
                    <div className='location-wrapper'>
                        <div className='location-icon-name'>
                        <i className="fi fi-rr-marker absolute-center location-icon"></i>
                        <div>Dhaka</div>
                        </div>
                        <i className="fi fi-rr-caret-down absolute-center"></i>
                    </div>

                    <div className='location-divider'></div>

                    <div className='header-search-bar'>
                    <i className="fi fi-rr-search absolute-center  search-icon"></i>
                    <input className='search-input' placeholder='Search for restaurent, cuisine or dish' />
                    </div>

                </div>

                <div className='profile-wrapper'>
                    <img src={man} className="header-profile-image" alt="" />
                    <span className='header-user-name'>Ashraful..</span>
                    <i className="fi fi-rr-caret-down absolute-center profile-option-icon"></i>
                </div>


            </div>
        </div>
    );
};

export default Header;