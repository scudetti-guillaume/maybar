import React from 'react';
import drinkcard from '../data/data-carte.js';
import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper';
// A11y, EffectCards, Controller,
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';


const DrinksMocktails = (props) => {

    return (
        <div className='DMV2-Mocktails'>

            <div className="DMV2-Mocktails-texte">
                <div className="DMV2-Mocktails-title">
                    <h2>Nos Mocktails</h2>
                </div>
                <div className="DMV2-Mocktails-block-p">
                    <p className='DMV2-Mocktails-block-p-span'>
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

            {/* <div className="DMV2-mocktails-card-main"> */}

            <div className="DMV2-mocktails-card-main-contenair">
                <Swiper className="DMV2-mocktails-card-main-swiper"
                    modules={[
                        Navigation,
                        Pagination,
                        // Controller, 
                        Scrollbar,
                        // A11y, 
                        // EffectCards,
                        EffectCoverflow
                    ]}
                    // effect={"cards"}
                    effect={"coverflow"}
                    coverflowEffect={{
                        rotate: 10,
                        stretch: 60,
                        depth: 70,
                        modifier: 3,
                        slideShadows: false,
                    }}
                    pagination={{
                        //     // type: "fraction", 
                        clickable: true
                    }}
                    // navigation={true}
                    spaceBetween={0}
                    centeredSlides={true}
                    slidesPerView={2}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    grabCursor={true}

                // scrollbar={{ draggable: true }}
                > {
                        drinkcard.filter(drink => drink.categorie === "mocktail")
                            .map
                            ((mocktails, nom) => (
                                <SwiperSlide className="DMV2-mocktails-card-main-swiper-slider" key={nom}>
                                    <div className="DMV2-mocktails-card-main-swiper-slider-contenair-texte">
                                        <p className='DMV2-mocktails-card-main-swiper-slider-contenair-p' >
                                            {/* <span className='DB-block-right-cocktails-card-slider-categories'>{cocktail.categories} </span> */}
                                            <span className='DMV2-mocktails-card-main-swiper-slider-nom'>{mocktails.nom}</span>

                                            <span className='DMV2-mocktails-card-main-swiper-slider-ingredients'>{mocktails.ingredients} </span>
                                            <span className='DMV2-mocktails-card-main-swiper-slider-description'>{mocktails.description} </span>
                                        </p>
                                        <img className='DMV2-mocktails-card-main-swiper-slider-img' src={mocktails.image} alt={mocktails.nom} />
                                    </div>
                                </SwiperSlide>
                            ))}

                </Swiper>


            </div>
        </div>
        // </div>
    );
};

export default DrinksMocktails;