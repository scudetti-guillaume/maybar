import React from "react";
// import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Navigation from "../components/navigation/Navigation-2";
import Footer from "../components/footer/Footer-2";
import emailjs from 'emailjs-com';

const Contact = () => {
    // const [showModal, setShowModal] = useState(false);
    // const handleClose = () => setShowModal(false);
    const onSubmit = (data) => {

        //    let dataSend = data.Stringyfi
        emailjs.sendForm('maybar', 'maybar', ".Contact-Form-Form", '8LVsJ91ALmIjeAPLU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <Navigation />
            <div className="Contact-main body-2 ">

                <div className="Contact-main-block">
                    <div className="Contact-main-block-header">
                        <img className="Contact-main-block-logo" src='./icons/maybarBc.png' alt='maybar logo'></img>
                        <h1 className="Contact-main-block-title">Contact</h1>

                    </div>
                    <p className="Contact-main-block-p">
                        <span className="Contact-main-block-span1"> Pour tous devis, renseignement sur nos évènements, carte, prestation ,</span>
                        <span> contactez nous par mail, téléphone, formulaire de contact ou directement sur nos réseau. </span>
                    </p>
                    <div className="Contact-main-block-icon-contact">
                        <div className="Contact-main-block-telephone"> <BsFillTelephoneFill /> 0658461109</div>
                        <NavLink to="mailto:" target='_blank ' >
                            <div className="Contact-main-block-email">
                                <div className="Contact-main-block-email-icon"><FiMail /></div>
                                <span className="Contact-main-block-email-span"> maybar.mobile@gmail.com</span>
                            </div>
                        </NavLink>

                        <div className="Contact-main-block-sociaux-test"> 
                            <NavLink to="https://www.facebook.com/MaybarMobile" target='_blank ' >
                                <div className="Contact-main-block-logo-facebook"><img className='Contact-main-block-social-icon-fb' src="./icons/facebook-f.svg" alt='facebook icon' /></div>
                            </NavLink>
                            <NavLink to="https://www.instagram.com/maybarmobile/" target='_blank'  >
                                <div className='Contact-main-block-logo-insta'><img className='Contact-main-block-social-icon-insta' src="./icons/instagram.svg" alt='instagram icon' /></div>
                            </NavLink>
                            
                        </div>
                    </div>
                </div>
                {/* <button onClick={() => setShowModal(true)}>Ouvrir la modale</button> */}

                {(
                    <div className="Contact-Form">
                        <div className="Contact-Form-title">
                            <h2 className="Contact-Form-title-h2">Formulaire de contact</h2>
                            <form className="Contact-Form-Form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="Contact-Form-nom">
                                    <div className="Contact-Form-labinp">
                                        <label className="Contact-Form-label" htmlFor="nom">Nom</label>
                                        <input className="Contact-Form-message-input" {...register("nom", { required: true })} type="text" id="nom" /></div>
                                    {errors.nom && <span className="Contact-Form-message-erreur">Ce champ est requis</span>}
                                </div>

                                <div className="Contact-Form-prenom">
                                    <div className="Contact-Form-labinp">
                                        <label className="Contact-Form-label" htmlFor="prenom">Prénom</label>
                                        <input className="Contact-Form-message-input" {...register("prenom", { required: true })} type="text" id="prenom" /></div>
                                    {errors.prenom && <span className="Contact-Form-message-erreur">Ce champ est requis</span>}
                                </div>

                                <div className="Contact-Form-email">
                                    <div className="Contact-Form-labinp">
                                        <label className="Contact-Form-label" htmlFor="email">Email</label>
                                        <input className="Contact-Form-message-input" {...register("email", { required: true })} type="email" id="email" /></div>
                                    {errors.email && <span className="Contact-Form-message-erreur">Ce champ est requis</span>}
                                </div>

                                <div className="Contact-Form-telephone">
                                    <div className="Contact-Form-labinp">
                                        <label className="Contact-Form-label" htmlFor="telephone">Téléphone</label>
                                        <input className="Contact-Form-message-input"  {...register("telephone", { required: true })} type="tel" id="telephone" /></div>
                                    {errors.telephone && <span className="Contact-Form-message-erreur">Ce champ est requis</span>}
                                </div>

                                <div className="Contact-Form-message">
                                    <div className="Contact-Form-labinp-message">
                                        <label className="Contact-Form-label" htmlFor="message">Message</label>
                                        <textarea className="Contact-Form-message-ta" {...register("message", { required: true })} id="message" /></div>
                                    {errors.message && <span className="Contact-Form-message-erreur-ta">Ce champ est requis</span>}
                                </div>

                                <button className="Contact-Form-btn" type="submit">Envoyer</button>
                            </form>

                            {/* <button onClick={handleClose}>Fermer</button> */}
                        </div>
                    </div>
                )}
            </div>
            <Footer />

        </>
    );
};

export default Contact;