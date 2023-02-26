import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import Modal from "react-modal";
import ContactMod from './Contact-comp';
import '../style/components/_Footer.scss'

const Footer = ({ scrollToComponent }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
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
                {/* <NavLink to="News" target='_blank'> */}
                    <li className='Footer-li' onClick={() => scrollToComponent("news-section")}>
                    <div className='Footer-news'>News</div>
                </li>
                {/* </NavLink> */}
             
                
                
                
                {/* <NavLink to="/carte" target='_blank'> */}
                    <li className='Footer-li' onClick={() => scrollToComponent("cocktails-section")}>
                    <div className='Footer-menu'>Carte</div>
                </li>
                    {/* </NavLink> */}
                {/* <NavLink to="/carte" target='_blank'> */}
                    <li className='Footer-li' onClick={() => scrollToComponent("prestation-section")}>
                    <div className='Footer-presta'>Prestations</div>
                </li>
                       
                {/* </NavLink> */}
                {/* <NavLink to="/contact" target='_blank' >
                <li className='Footer-li'>
                    <div className='Footer-contact'>Contact</div>
                </li >
                </NavLink> */}
                <div className="Footer-li-contact" onClick={() => setModalIsOpen(true)} >Contact</div>
                <Modal className='Modale-Contact' isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}   >
                    <ContactMod closeModal={() => setModalIsOpen(false)} />
                </Modal>
                
                
                
                <NavLink to="/condition"  >
                <li className='Footer-li'>
                    <div className='Footer-condition'>Conditions</div>
                </li >
                </NavLink>
                <NavLink to="https://www.facebook.com/MaybarMobile" target='_blank'>
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