import React from 'react';
// import "../style/page/_Carte.scss";
import Navigation from '../components/navigation/Navigation-2';
import Footer from '../components/footer/Footer-2';
import drinkcard from '../data/data-carte.js';


const Carte = () => {
    return (
        <>
            <Navigation />
            <div className='body-2 Carte-main '>
                <div className="Carte-container">
                    <div className="Carte-header">
                        <img className='logo-name-carte' src='./icons/maybarBc.png' alt='maybar logo'></img>
                        <h1 className="Carte-header-title">La Carte</h1>
                    </div>
                    <div className="Carte-container-cocktails">
                        <h2 className="Carte-container-cocktails-title">Les Cocktails</h2>
                        <div className="Carte-container-cocktails-listeCocktails-classique">
                            {drinkcard.filter(drink => drink.categorie === "cocktail")
                                .filter(drink => drink.originalite === "classique")
                                .map((cocktail, index) => (


                                    <div key={index} className="Carte-container-cocktails-carte">

                                        <div key={index} className="Carte-container-cocktails-carte-img">
                                            <img className="Carte-container-cocktails-carte-img-size" src={cocktail.image} alt={cocktail.nom} />
                                        </div>
                                        {/* <div className="Carte-container-cocktails-carte-cat"></div> */}
                                        <div className='Carte-container-cocktails-carte-texte'>
                                            <div className="Carte-container-cocktails-carte-cat">
                                            <h3>{cocktail.nom}</h3>
                                            <p className='Carte-container-cocktails-carte-texte-p-originalite'>{cocktail.originalite}</p>
                                            
                                            </div>
                                            <p>{cocktail.description}</p>
                                            <p>{cocktail.ingredients}</p>
                                            <p>{cocktail.decoration}</p>
                                            <p>{cocktail.preparation}</p>
                                            <p>{cocktail.quantite}</p>
                                        </div>
                                    </div>

                                ))}
                        </div> <div className="Carte-container-cocktails-listeCocktails-creation">
                            {drinkcard.filter(drink => drink.categorie === "cocktail")
                                .filter(drink => drink.originalite === "creation")
                                .map((cocktail, index) => (


                                    <div key={index} className="Carte-container-cocktails-carte">

                                        <div key={index} className="Carte-container-cocktails-carte-img">
                                            <img className="Carte-container-cocktails-carte-img-size" src={cocktail.image} alt={cocktail.nom} />
                                        </div>
                                        <div className="Carte-container-cocktails-carte-cat">


                                        </div>
                                        <div className='Carte-container-cocktails-carte-texte'>
                                            <div className="Carte-container-cocktails-carte-cat">
                                                <h3>{cocktail.nom}</h3>
                                                <p className='Carte-container-cocktails-carte-texte-p-originalite'>{cocktail.originalite}</p>

                                            </div>
                                            {/* <p>{cocktail.originalite}</p>
                                            <h3>{cocktail.nom}</h3> */}
                                            <p>{cocktail.description}</p>
                                            <p>{cocktail.ingredients}</p>
                                            <p>{cocktail.decoration}</p>
                                            <p>{cocktail.preparation}</p>
                                            <p>{cocktail.quantite}</p>
                                        </div>
                                    </div>

                                ))}
                        </div>
                        {/* <div className="Carte-container-cocktails-listeCocktails">
                            <p className="Carte-container-mocktails-listeCocktails-p-classique">
                                <span className="Carte-container-mocktails-listeCocktails-span">
                                </span >
                            </p><p className="Carte-container-mocktails-listeCocktails-p-creation">
                                <span className="Carte-container-mocktails-listeCocktails-span">
                                </span >
                            </p>
                        
                        </div> */}
                    </div>
                    <div className="Carte-container-mocktails">
                        <h2 className="Carte-container-mocktails-title">Les Mocktails</h2>
                        <div className="Carte-container-mocktails-listeMocktails">
                            {drinkcard.filter(drink => drink.categorie === "mocktail")
                                .filter(drink => drink.originalite === "classique")
                                .map((mocktail, index) => (


                                    <div key={index} className="Carte-container-mocktails-carte">

                                        <div key={index} className="Carte-container-mocktails-carte-img">
                                            <img className="Carte-container-mocktails-carte-img-size" src={mocktail.image} alt={mocktail.nom} />
                                        </div>
                                        <div className="Carte-container-mocktails-carte-cat">


                                        </div>
                                        <div className='Carte-container-mocktails-carte-texte'>
                                            <div className="Carte-container-cocktails-carte-cat">
                                                <h3>{mocktail.nom}</h3>
                                                <p className='Carte-container-cocktails-carte-texte-p-originalite'>{mocktail.originalite}</p>

                                            </div>
                                        
                                        
{/*                                         
                                            <p>{mocktail.originalite}</p>
                                            <h3>{mocktail.nom}</h3> */}
                                            <p>{mocktail.description}</p>
                                            <p>{mocktail.ingredients}</p>
                                            <p>{mocktail.decoration}</p>
                                            <p>{mocktail.preparation}</p>
                                            <p>{mocktail.quantite}</p>
                                        </div>
                                    </div>

                                ))}
                        </div>

                    </div>
                    <div className="Carte-container-options">
                        <h2 className="Carte-container-tarifs-title">Les Options</h2>
                        <div className="Carte-container-tarifs-main-p">
                            <p className="Carte-container-tarifs-p">
                                <span className="Carte-container-tarifs-span">Distributeur à eau aromatisée aux fruits de saison : 5 Litres</span>
                                <br />
                                <span className="Carte-container-tarifs-span">Pour que les enfants ne se sentent pas oubliés</span>
                                <span className="Carte-container-tarifs-span"> Prix : 15 € HT</span>
                            </p>
                            <p className="Carte-container-tarifs-p">
                                <span className="Carte-container-tarifs-span">Personnalisation du bar avec toile aimantable:</span>
                                <br />
                                <span className="Carte-container-tarifs-span">Vous repartez avec la toile aimantable de 150cm x 100cm de votre création</span>
                                <br />
                                <span className="Carte-container-tarifs-span"> Prix : 150 € HT</span>
                            </p>
                            <p className="Carte-container-tarifs-p">
                                <span className="Carte-container-tarifs-span">Kit d'éthylotest x 25</span>
                                <br />
                                <span className="Carte-container-tarifs-span">Quand on tient à quelqu’un, on le retient.</span>
                                <br />
                                <span className="Carte-container-tarifs-span"> Prix : 42.5 € HT</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />

        </>
    );
};

export default Carte;