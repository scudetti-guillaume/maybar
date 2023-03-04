import React from 'react';
import drinkcard from '../../data/data-carte.js';

import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper';
// A11y, EffectCards, Controller,
import { Swiper, SwiperSlide } from 'swiper/react';
// import "../style/components/drinks/_Drinks-CocktailsV2.scss";

// import { NavLink } from 'react-router-dom';


const DrinksMocktailsV2swiper = () => {
    return (
        <div className="DMV2-main-swiper-cocktails-card">
            <Swiper className="DMV2-main-swiper-cocktails-card-container"
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
                // effect={"coverflow"}
                // coverflowEffect={{
                //     rotate: 10,
                //     stretch: 60,
                //     depth: 50,
                //     modifier: 3,
                //     slideShadows: false,
                // }}
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 15,
                    stretch: -20,
                    depth: 60,
                    modifier: 3,
                    slideShadows: false,
                }}
                pagination={{
                    //     // type: "fraction", 
                    clickable: true
                }}
                // navigation={true}
                // spaceBetween={0}
                // centeredSlides={true}
                // slidesPerView={2}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                grabCursor={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        centeredSlides: true
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        centeredSlides: true
                    },
                    1154: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        centeredSlides: true
                    },
                }}
            // scrollbar={{ draggable: true }}
            > {
                    drinkcard.filter(drink => drink.categorie === "mocktail")
                        .map
                        ((mocktails, nom) => (
                            <div className="DMV2-mocktails-card-slider-main">

                                <SwiperSlide className="DMV2-mocktails-card-slider" key={nom}>
                                    <div className="DMV2-mocktails-card-slider-main">
                                        <p className='DMV2-mocktails-card-slider-p' >
                                            {/* <span className='DB-block-right-cocktails-card-slider-categories'>{cocktail.categories} </span> */}
                                            <span className='DMV2-mocktails-card-main-swiper-slider-nom'>{mocktails.nom}</span>

                                            <span className='DMV2-mocktails-card-main-swiper-slider-ingredients'>{mocktails.ingredients} </span>
                                            <span className='DMV2-mocktails-card-main-swiper-slider-description'>{mocktails.description} </span>
                                        </p>
                                        <div className='DMV2-block-right-cocktails-card-slider-contenair-img'>
                                            <img className='DMV2-mocktails-card-main-swiper-slider-img' src={mocktails.image} alt={mocktails.nom} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        ))}

            </Swiper>


        </div>
    );
};

export default DrinksMocktailsV2swiper;