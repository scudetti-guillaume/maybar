// import React from 'react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from "react-modal";
import BlockPhotosPrestation from './Block-photos-prestation';
import ContactMod from '../contact/Contact-comp';
import Modalgalerieprestation from '../prestation/Modal-galerie-prestation'
// import ModalgalerieprestationV2 from '../prestation/Modal-galerie-prestationV2'


Modal.setAppElement("#root");

const Prestations = () => {
    const [modalContact, setModalContact] = useState(false);
    const [Modalgalerie, setModalgalerie] = useState(false);

    return (
        <div className='Presta-main' id='prestation-section'>
            <div className="Presta-block-title">
                <h1 className="Presta-block-title-h1">
                    Nos prestations
                </h1>
                {/* <btn className="Presta-block-title-btn"></btn> */}
            </div>
            <div className="Presta-block-decription">
                <h2 className="Presta-block-decription-h2">BAR MOBILE</h2>
                <p className="Presta-block-decription-p">
                    <span className="Presta-block-decription-span">Nous venons à vous pour tous vos événements dans la region rhone-alpes: </span>
                    {/* <span className="Presta-block-decription-span1">Nous venons à vous pour tous vos événements : </span> */}
                    <span className="Presta-block-decription-span">
                        mariages, anniversaires, séminaires, portes ouvertes, ...
                    </span>
                    <span className="Presta-block-decription-span">
                        N'hésitez pas à demander votre devis via le formualire de contact ou directement sur nos réseaux.

                    </span>

                    <span className="Presta-block-decription-span">
                        Nous vous accompagnerons pour vous fournir une prestation au plus près de vos attentes.
                    </span>
                </p>
                <div className="Presta-footer-navlink">
                    <div className="Presta-footer-navlink-reseau">
                        <span className="Presta-footer-navlink-reseau-span" >
                            RESERVEZ VOTRE SOIREE
                        </span>

                        <div className="Presta-footer-navlink-logo">

                            <div className="Presta-block-decription-btn-form-mod" onClick={() => setModalContact(true)} ><span className="Presta-block-decription-btn-form-mod-span">Formulaire</span></div>
                            <Modal className='Modale-Contact' isOpen={modalContact}  >
                                <ContactMod closeModal={() => setModalContact(false)} />
                            </Modal>
                            {/* <NavLink className="Presta-block-decription-Navlink-btn" to="/contact" >
                                <div className="Presta-block-decription-btn-form-mod"><span className="Presta-block-decription-btn-form-mod-span">Formulaire</span></div>
                            </NavLink> */}
                            <NavLink to="https://www.facebook.com/MaybarMobile" target='_blank ' >
                                <div className="Presta-footer-logo-facebook"><img className='Cocktail-footer-social-icon-fb' src="./icons/facebook-f.svg" alt='facebook icon' /></div>
                            </NavLink>
                            <NavLink to="https://www.instagram.com/maybarmobile/" target='_blank'  >
                                <div className='Presta-footer-logo-insta'><img className='Cocktail-footer-social-icon-insta' src="./icons/instagram.svg" alt='instagram icon' /></div>
                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>
            <button className='Prestation-button-galerie' onClick={() => setModalgalerie(true)}>La galerie complete</button>
            <Modal className='Modale-Contact' isOpen={Modalgalerie} onRequestClose={() => setModalgalerie(false)}   >
                <Modalgalerieprestation closeModaleGalerie={() => setModalgalerie(false)} />
            </Modal>
            {/* <Modal className='Modale-Contact' isOpen={Modalgalerie} onRequestClose={() => setModalgalerie(false)}   >
                <ModalgalerieprestationV2 closeModaleGalerie={() => setModalgalerie(false)} />
            </Modal> */}
            <div className="Presta-block-photo-grid">
            
                <BlockPhotosPrestation />
            </div>

        </div>
    );
};

export default Prestations;