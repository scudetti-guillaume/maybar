import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from "react-modal";
import ContactMod from '../contact/Contact-comp';
// import '../style/components/_Navigation.scss'
// import {GiOpenBook} from 'react-icons/gi';
// import {SlBookOpen} from 'react-icons/sl';
// import { AiFillContacts } from 'react-icons/ai';
// import { MdOutlinePermContactCalendar } from 'react-icons/md';
// import { FcContacts } from 'react-icons/fc';
// import { FcBusinessContact } from 'react-icons/fc';
// import { FcNews } from 'react-icons/fc';
// import { BiDrink } from 'react-icons/bi';





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
                    {/* <FcNews /> */}
                    <img className='Nav-news-icon' src='./icons/icone-graph/newspaper32.png' alt='carte logo'></img>
                    <div className='Nav-news'>News</div>
                </li>

                <li className='Nav-li' onClick={() => scrollToComponent("cocktails-section")}>
                    {/* <GiOpenBook /> */}
                    {/* <IoBookOutline/> */}
                    {/* <SlBookOpen/> */}
                   
                    <img className='Nav-carte-icon' src='./icons/icone-graph/menu32c.png' alt='carte logo'></img>
                    <div className='Nav-menu'>Carte</div>
                </li>

                <li className='Nav-li' onClick={() => scrollToComponent("prestation-section")} >
                    {/* <BiDrink /> */}
                    <img className='Nav-presta-icon' src='./icons/icone-graph/bartender32.png' alt='presta logo'></img>
                    <div className='Nav-presta' >Prestations</div>
                </li>
                {/* <NavLink to="/contact" >
                    <li className='Nav-li' onClick={() => setModalIsOpen(true)}>
                        <div className='Nav-contact'>Contact</div>
                    </li >
                </NavLink> */}
                {/* <FcContacts /> */}
                {/* <AiFillContacts />
                <MdOutlinePermContactCalendar /> */}
                
                <div className="Nav-li-text" onClick={() => setModalIsOpen(true)} >Contact</div>
                <div className="Nav-contact-icon" onClick={() => setModalIsOpen(true)} ><img className='Nav-contact-icon' src='./icons/icone-graph/communicate32.png' alt='contact logo'></img></div>
                
                {/* <div className="Nav-li-icon" onClick={() => setModalIsOpen(true)} ><FcBusinessContact /></div> */}
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