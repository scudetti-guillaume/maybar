import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import emailjs from 'emailjs-com';


const ContactComp = ({ closeModal }) => {
    const [sent, setSent] = useState(false);

    const onSubmit = (data) => {


        emailjs.sendForm('maybar', 'maybar', ".Contact-Form-Form-mod", '8LVsJ91ALmIjeAPLU')
            .then((result) => {
                setSent(true)
                setTimeout(() => {

                    closeModal()
                }, 3000);

                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            
            <div className=" Contact-main-mod ">
                <div onClick={closeModal} shouldCloseOnOverlayClick={true} className="Contact-closeModale">X</div>
                <div className="Contact-main-block-mod">
                    <div className="Contact-main-block-header-mod">

                        <img className="Contact-main-block-logo-mod" src='./icons/maybarBc.png' alt='maybar logo'></img>

                        <h1 className="Contact-main-block-title-mod">Contact</h1>

                    </div>
                    <p className="Contact-main-block-p-mod">
                        <span className="Contact-main-block-span1-mod"> Pour tous devis, renseignement sur nos évènements, carte, prestation ,</span>
                        <span> contactez nous par mail, téléphone, formulaire de contact ou directement sur nos réseau. </span>
                    </p>
                    <div className="Contact-main-block-icon-contact-mod">
                        <div className="Contact-main-block-telephone-mod"> <BsFillTelephoneFill /> 0658461109</div>
                        <NavLink to="mailto:" target='_blank ' >
                            <div className="Contact-main-block-email-mod">
                                <div className="Contact-main-block-email-icon-mod"><FiMail size="25px" /></div>
                                <span className="Contact-main-block-email-span-mod"> maybar.mobile@gmail.com</span>
                            </div>
                        </NavLink>


                        <NavLink to="https://www.facebook.com/MaybarMobile" target='_blank ' >
                            <div className="Contact-main-block-logo-facebook-mod"><img className='Contact-main-block-social-icon-fb-mod' src="./icons/facebook-f.svg" alt='facebook icon' /></div>
                        </NavLink>
                        <NavLink to="https://www.instagram.com/maybarmobile/" target='_blank'  >
                            <div className='Contact-main-block-logo-insta-mod'><img className='Contact-main-block-social-icon-insta-mod' src="./icons/instagram.svg" alt='instagram icon' /></div>
                        </NavLink>
                    </div>
                </div>
                {/* <button onClick={() => setShowModal(true)}>Ouvrir la modale</button> */}

                {(
                    <div className="Contact-Form-mod">
                        <div className="Contact-Form-title-mod">
                            <h2 className="Contact-Form-title-h2-mod">Formulaire de contact</h2>
                            <form className="Contact-Form-Form-mod" onSubmit={handleSubmit(onSubmit)}>
                                <div className="Contact-Form-nom-mod">
                                    <div className="Contact-Form-labinp-mod">
                                        <label className="Contact-Form-label-mod" htmlFor="nom">Nom</label>
                                        <input className="Contact-Form-message-input-mod" {...register("nom", { required: true })} type="text" id="nom" /></div>
                                    {errors.nom && <span className="Contact-Form-message-erreur-mod">Ce champ est requis</span>}
                                </div>

                                <div className="Contact-Form-prenom-mod">
                                    <div className="Contact-Form-labinp-mod">
                                        <label className="Contact-Form-label-mod" htmlFor="prenom">Prénom</label>
                                        <input className="Contact-Form-message-input-mod" {...register("prenom", { required: true })} type="text" id="prenom" /></div>
                                    {errors.prenom && <span className="Contact-Form-message-erreur-mod">Ce champ est requis</span>}
                                </div>

                                <div className="Contact-Form-email-mod">
                                    <div className="Contact-Form-labinp-mod">
                                        <label className="Contact-Form-label-mod" htmlFor="email">Adresse email</label>
                                        <input className="Contact-Form-message-input-mod" {...register("email", { required: true })} type="email" id="email" /></div>
                                    {errors.email && <span className="Contact-Form-message-erreur-mod">Ce champ est requis</span>}
                                </div>

                                <div className="Contact-Form-telephone-mod">
                                    <div className="Contact-Form-labinp-mod">
                                        <label className="Contact-Form-label-mod" htmlFor="telephone">Téléphone</label>
                                        <input className="Contact-Form-message-input-mod"  {...register("telephone", { required: true })} type="tel" id="telephone" /></div>
                                    {errors.telephone && <span className="Contact-Form-message-erreur-mod">Ce champ est requis</span>}
                                </div>

                                <div className="Contact-Form-message-mod">
                                    <div className="Contact-Form-labinp-message-mod">
                                        <label className="Contact-Form-label-mod" htmlFor="message">Message</label>
                                        <textarea className="Contact-Form-message-ta-mod" {...register("message", { required: true })} id="message" /></div>
                                    {errors.message && <span className="Contact-Form-message-erreur-ta-mod">Ce champ est requis</span>}
                                </div>

                                <button className="Contact-Form-btn-mod" type="submit">Envoyer</button>
                                {sent && <p className="Contact-Form-span-send-mod">Formulaire envoyé</p>}
                            </form>

                            {/* <button onClick={handleClose}>Fermer</button> */}
                        </div>
                    </div>
                )}
            </div>

        </>
    );
};

export default ContactComp