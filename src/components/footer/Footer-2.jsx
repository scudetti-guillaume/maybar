import React from 'react';
import { NavLink } from 'react-router-dom';
// import Modal from "react-modal";
// import ContactMod from '../contact/Contact-comp';
// import '../../style/components/footer/_Footer.scss'

const Footer = ({ scrollToComponent }) => {
    // const [modalIsOpen, setModalIsOpen] = useState(false);
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
                <NavLink to='/'>
                    <li className='Footer-li' onClick={() => scrollToComponent("news-section")}>
                        <img className='Footer-news-icon' src='./icons/icone-graph/newspaper32.png' alt='carte logo'></img>
                        <div className='Footer-news'>News</div>
                    </li>
                </NavLink>



                {/* <NavLink to="/carte" target='_blank'> */}
                <NavLink to='/'>
                    <li className='Footer-li' onClick={() => scrollToComponent("cocktails-section")}>
                        <img className='Footer-carte-icon' src='./icons/icone-graph/menu32c.png' alt='carte logo'></img>
                        <div className='Footer-menu'>Carte</div>
                    </li>
                </NavLink>
                {/* </NavLink> */}
                {/* <NavLink to="/carte" target='_blank'> */}
                <NavLink to='/'>
                    <li className='Footer-li' >
                        <img className='Footer-presta-icon' src='./icons/icone-graph/bartender32.png' alt='presta logo'></img>
                        <div className='Footer-presta'>Prestations</div>
                    </li>
                </NavLink>
                {/* </NavLink> */}
                <NavLink to="/contact" >
                    <li className='Footer-li' >
                        <div className="Nav-li-text" >Contact</div>
                        <div className="Nav-contact-icon"  ><img className='Nav-contact-icon' src='./icons/icone-graph/communicate32.png' alt='contact logo'></img></div>
                    </li >
                </NavLink>
                {/* <div className="Footer-li-contact" onClick={() => setModalIsOpen(true)} >Contact</div>
                <div className="Footer-contact-icon" onClick={() => setModalIsOpen(true)} ><img className='Nav-contact-icon' src='./icons/icone-graph/communicate32.png' alt='contact logo'></img></div>
                <Modal className='Modale-Contact' isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}   >
                    <ContactMod closeModal={() => setModalIsOpen(false)} />
                </Modal> */}



                <NavLink to="/condition"  >
                    <li className='Footer-li'>
                        <img className='Footer-condition-icon' src='./icons/icone-graph/terms-and-conditions32cc.png' alt='presta logo'></img>
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