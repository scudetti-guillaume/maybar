import React from 'react';
import drinkcard from '../../data/data-carte.js';
import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper';
// A11y, EffectCards, Controller,
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';


const CocktailsBlockRightV1 = (props) => {

    return (
        <div className='CB-block-right'>
            <div className="CB-block-right-cocktails">
                <div className="CB-block-right-cocktails-title">
                    <h1 className='CB-block-right-cocktails-title-span' >Nos Cocktails</h1>
                </div>
                <div className="CB-block-right-cocktails-card">

                    <Swiper className="CB-block-right-cocktails-card-swiper"
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
                            stretch: -10,
                            depth: 60,
                            modifier: 3,
                            slideShadows: false,
                        }}
                        // pagination={{
                        //     // type: "fraction", 
                        //     clickable: true 
                        // }}
                        // navigation={true}
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView={2}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        grabCursor={true}

                    // scrollbar={{ draggable: true }}
                    > {
                            drinkcard.filter(drink => drink.categorie === "cocktail")
                                .map

                                ((cocktails, nom) => (
                                    <SwiperSlide className="CB-block-right-cocktails-card-slider" key={nom}>
                                        <div className="CB-block-right-cocktails-card-slider-main">
                                            <p className='CB-block-right-cocktails-card-slider-p' >
                                                {/* <span className='CB-block-right-cocktails-card-slider-categories'>{cocktail.categories} </span> */}
                                                <span className='CB-block-right-cocktails-card-slider-nom'>{cocktails.nom}</span>

                                                <span className='CB-block-right-cocktails-card-slider-ingredients'>{cocktails.ingredients} </span>
                                                <span className='CB-block-right-cocktails-card-slider-description'>{cocktails.description} </span>
                                            </p>
                                            <img className='CB-block-right-cocktails-card-slider-img' src={cocktails.image} alt={cocktails.nom} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                    </Swiper>


                </div>
            </div>
            <div className="CB-block-right-mocktails">
                <div className="CB-block-right-mocktails-title">
                    <h1 className='CB-block-right-mocktails-title-span' >Nos Mocktails</h1>
                </div>
                <div className="CB-block-right-mocktails-card">
                    <Swiper className="CB-block-right-mocktails-card-swiper"
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
                                    <SwiperSlide className="CB-block-right-mocktails-card-slider" key={nom}>
                                        <div className="CB-block-right-mocktails-card-slider-main">
                                            <p className='CB-block-right-mocktails-card-slider-p' >
                                                {/* <span className='CB-block-right-cocktails-card-slider-categories'>{cocktail.categories} </span> */}
                                                <span className='CB-block-right-mocktails-card-slider-nom'>{mocktails.nom}</span>

                                                <span className='CB-block-right-mocktails-card-slider-ingredients'>{mocktails.ingredients} </span>
                                                <span className='CB-block-right-mocktails-card-slider-description'>{mocktails.description} </span>
                                            </p>
                                            <img className='CB-block-right-mocktails-card-slider-img' src={mocktails.image} alt={mocktails.nom} />
                                        </div>
                                    </SwiperSlide>
                                ))}

                    </Swiper>


                </div>
            </div>
        </div>
    );
};

export default CocktailsBlockRightV1;