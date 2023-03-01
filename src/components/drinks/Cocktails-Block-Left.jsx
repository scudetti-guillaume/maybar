import React from 'react';
// import { NavLink } from 'react-router-dom';

const CocktailsBlockLeft = () => {
    return (
        <>
            <div className="CB-block-left">
                <div className="CB-block-left-cocktail">
                    <div className="CB-block-left-titre-cocktail">
                        <h2>Nos Cocktails</h2>
                    </div>
                    <div className="CB-block-left-block-cocktail">
                        <p className='CB-block-left-block-cocktail-p'>
                            «Nous vous présentons notre carte de Cocktails.
                            <br />
                            Vous aurez le choix entre
                            <span>la rubrique classique</span> (qui
                            regroupe les cocktails les plus connus pour plaire à tout
                            le monde),et
                            <br />
                            <span> nos créations du moment</span>
                            (cette carte varie selon les saisons et les
                            envies de nos Mixologues).»</p>
                    </div>
                </div>
                <div className="CB-block-left-mocktail">
                    <div className="CB-block-left-titre-mocktail">
                        <h2>Nos Mocktails</h2>
                    </div>
                    <div className="CB-block-left-block-mocktail">
                        <p className='CB-block-left-block-mocktail-p'>
                            <span>Un Mocktail est un cocktail sans alcool. </span>  <br />
                            <span>  Il est l’assemblage des termes
                                mock et cocktail qui signifient imitation et mélange.</span> 
                          
                          
                          
                            <br />
                            <span>   Ceux ci sont travaillés de façon à mettre en
                                avant les ingrédients dit secondaires pour les
                                cocktails : sirop, jus de fruit, soda,
                                eau aromatisée ...</span> 
                         
                          
                            <br />
                            <span> Nous vous proposons cette sélection de Mocktails
                                afin de compléter vos envies pour vos
                                évènements et n’oublier personne. </span> 
                           
                          </p>
                    </div>
                </div>
                {/* <div className="CB-block-left-navlink-btn">
                
                <NavLink target='_blank' to='/carte'>
                    <button className="CB-block-left-tocarte">
                        <span>Découvrez notre carte complete MAYBAR</span>
                    </button>
                </NavLink>
                <NavLink target='_blank' to='https://cdn.website.dish.co/media/8c/16/4748575/COCKTAILS-MOCKTAILS.pdf'>
                    <button className="CB-block-left-dlpdf">
                        <span>Télecharger la version PDF de notre carte</span>
                        <img className='CB-block-left-dlpdf-icon' src="" alt='facebook icon' />
                    </button>
                </NavLink>
                </div> */}
            </div>


        </>
    );
};

export default CocktailsBlockLeft;