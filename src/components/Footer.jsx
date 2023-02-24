import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='Footer-container'>
            <NavLink className="Footer-NavLink-block-logo" to="/" >
                <div className='Footer-block-logo'>
                    <img className='Footer-logo-icon' src='./icons/maybar-header-logo.png' alt='maybar logo'></img>
                    <img className='Footer-logo-name' src='./icons/maybarBc.png' alt='maybar logo'></img>
                    {/* <div className='Footer-Maybar'>Maybar</div> */}
                </div>
            </NavLink>
            <ul className='Footer-ul' > 
                <li className='Footer-li'>
                    <div className='Footer-news'>News</div>
                </li>
                <li className='Footer-li'>
                    <div className='Footer-menu'>Carte</div>
                </li>
                <li className='Footer-li'>
                    <div className='Footer-presta'>Prestations</div>
                </li>
                <NavLink to="/contact" target='_blank' >
                <li className='Footer-li'>
                    <div className='Footer-contact'>Contact</div>
                </li >
                </NavLink>
                <NavLink to="/condition" target='_blank' >
                <li className='Footer-li'>
                    <div className='Footer-condition'>Conditions</div>
                </li >
                </NavLink>
                <NavLink to="/carte" target='_blank'>
                    <li className='Footer-li-icon'>
                        <div className='Footer-div-social-fb'><img className='Footer-social-icon-fb' src="./icons/facebook-f.svg" alt='facebook icon' /></div>
                    </li>
                </NavLink>
                <NavLink to="https://www.instagram.com/maybarmobile/" target='_blank' >
                    <li className='Footer-li-icon' >
                        <div className='Footer-div-social-instagram'><img className='Footer-social-icon-insta' src="./icons/instagram.svg" alt='instagram icon' /></div>
                    </li>
                </NavLink>
            </ul>
            
        </div>
    );
};

export default Footer; 