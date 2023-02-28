import React from 'react';
import DrinksCocktails from './Drinks-Cocktails';
import DrinksMocktails from './Drinks-Mocktails';
import { NavLink } from 'react-router-dom';
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

const Drinks = () => {
    return (
        <div className='Drink-main' id='cocktails-section'>
            <div className="Drink-titre">
                <h1>La Carte</h1>
            </div>
            <div className="Drink-container">
                <DrinksCocktails className="DrinksCocktails" />
                <DrinksMocktails className="DrinksMocktails" />
                
            </div>
            <div className="Drink-footer">


                <div className="Drink-footer-navlink-btn">

                    <NavLink className="Drink-footer-navlink-tocarte"  to='/carte'>
                        <button className="Drink-footer-navlink-btn-tocarte">
                            <span className='Drink-footer-navlink-btn-tocarte-span' >la carte complete de MAYBAR</span>
                            <BsBook className='Drink-footer-navlink-btn-tocarte-icon' color='white' size='20px' />  
                        </button>
                    </NavLink>
                    <NavLink className="Drink-footer-navlink-dlpdf" target='_blank' to='https://cdn.website.dish.co/media/8c/16/4748575/COCKTAILS-MOCKTAILS.pdf'>
                        <button className="Drink-footer-navlink-btn-dlpdf">
                            <span className='Drink-footer-navlink-btn-dlpdf-span'>la version PDF de notre carte </span>< AiOutlineFilePdf className='Drink-footer-navlink-btn-dlpdf-icon' color='white' size='20px' />
                            
                        </button>
                    </NavLink>
                </div>

                <div className="Drink-footer-navlink-block">
                    <span className="Drink-footer-navlink-span">
                        N'hésitez pas à nous envoyez vos idées de cocktail.
                    </span>

                    <div className="Drink-footer-navlink-logo">

                        <NavLink to="https://www.facebook.com/MaybarMobile" target='_blank ' >
                            <div className="Drink-footer-logo-facebook"><img className='Drink-footer-social-icon-fb' src="./icons/facebook-f.svg" alt='facebook icon' /></div>
                        </NavLink>
                        <NavLink to="https://www.instagram.com/maybarmobile/" target='_blank'  >
                            <div className='Drink-footer-logo-insta'><img className='Drink-footer-social-icon-insta' src="./icons/instagram.svg" alt='instagram icon' /></div>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Drinks;