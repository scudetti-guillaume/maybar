import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Modal from "react-modal";
import ContactMod from './Contact-comp';
import '../style/components/_Navigation.scss'


const Navigation = ({ scrollToComponent }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className='Nav-main'>
            <NavLink className="NavLink-block-logo" to="/maybar/" >
                <div className='Nav-block-logo'>
                    <img className='Nav-logo-icon' src='./icons/maybar-header-logo.png' alt='maybar logo'></img>
                    <img className='Nav-logo-name' src='./icons/maybarBc.png' alt='maybar logo'></img>
                    {/* <div className='Nav-Maybar'>Maybar</div> */}
                </div>
            </NavLink>
            <ul className='Nav-ul' >
                <li className='Nav-li' onClick={() => scrollToComponent("news-section")}>
                    <div className='Nav-news'>News</div>
                </li>
                
                <li className='Nav-li' onClick={() => scrollToComponent("cocktails-section")}>
                        <div className='Nav-menu'>Carte</div>
                    </li>
             
                <li className='Nav-li' onClick={() => scrollToComponent("prestation-section")} >
                    <div className='Nav-presta' >Prestations</div>
                </li>
                {/* <NavLink to="/contact" >
                    <li className='Nav-li' onClick={() => setModalIsOpen(true)}>
                        <div className='Nav-contact'>Contact</div>
                    </li >
                </NavLink> */}      
                <div className="Nav-li" onClick={() => setModalIsOpen(true)} >Contact</div>
                <Modal className='Modale-Contact' isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}   >
                    <ContactMod closeModal={() => setModalIsOpen(false)} />
                </Modal>

                    
                <NavLink to="https://www.facebook.com/MaybarMobile" target='_blank'>
                    <li className='.Nav-li-icon'>
                        <div className='Nav-div-social-fb'><img className='Nav-social-icon-fb' src="./icons/facebook-f.svg" alt='facebook icon' /></div>
                    </li>
                </NavLink>
                <NavLink to="https://www.instagram.com/maybarmobile/" target='_blank' >
                    <li className='.Nav-li-icon' >
                        <div className='Nav-div-social-instagram'><img className='Nav-social-icon-insta' src="./icons/instagram.svg" alt='instagram icon' /></div>
                    </li>
                </NavLink>
            </ul>

        </div>
    );
};

export default Navigation;