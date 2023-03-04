
import React from 'react';
import drinkcard from '../../data/data-carte.js';
import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper';
// A11y, EffectCards, Controller,
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

// import "../style/components/drinks/_Drinks-CocktailsV2.scss";

// import { NavLink } from 'react-router-dom';

const DrinksCocktailsV2swiper = () => {
    return (
        <div className="DCV2-main-swiper-cocktails-card">

            <Swiper className="DCV2-main-swiper-cocktails-card-container"
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
                    rotate: 15,
                    stretch: -20,
                    depth: 60,
                    modifier: 3,
                    slideShadows: false,
                }}
                // effect={"coverflow"}
                // coverflowEffect={{
                //     rotate: 10,
                //     stretch: 60,
                //     depth: 50,
                //     modifier: 3,
                //     slideShadows: false,
                // }}
                // pagination={{
                //     // type: "fraction", 
                //     clickable: true 
                // }}
                // navigation={true}
                // spaceBetween={30}
                // centeredSlides={true}
                // slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                grabCursor={true}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 50,
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
                    drinkcard.filter(drink => drink.categorie === "cocktail")
                        .map

                        ((cocktails, nom) => (
                            <div className="DCV2-cocktails-card-slider-main">
                                <SwiperSlide className="DCV2-cocktails-card-slider" key={nom}>
                                    <div className="DCV2-cocktails-card-slider-main">
                                        <p className='DCV2-cocktails-card-slider-p' >
                                            {/* <span className='DCV2-block-right-cocktails-card-slider-categories'>{cocktail.categories} </span> */}
                                            <span className='DCV2-cocktails-card-slider-nom'>{cocktails.nom}</span>

                                            <span className='DCV2-cocktails-card-slider-ingredients'>{cocktails.ingredients} </span>
                                            <span className='DCV2-cocktails-card-slider-description'>{cocktails.description} </span>
                                        </p>
                                        <div className='DCV2-cocktails-card-slider-contenair-img'>
                                            <img className='DCV2-cocktails-card-slider-img' src={cocktails.image} alt={cocktails.nom} />
                                        </div>
                                    </div>

                                </SwiperSlide>
                            </div>
                        ))}
            </Swiper>


        </div>






    );
};

export default DrinksCocktailsV2swiper;