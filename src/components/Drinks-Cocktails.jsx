import React from 'react';
import drinkcard from '../data/data-carte.js';
import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper';
// A11y, EffectCards, Controller,
import { Swiper, SwiperSlide } from 'swiper/react';

// import { NavLink } from 'react-router-dom';

const DrinksCocktails = () => {
    return (

        <div className="DCV2-Cocktails">
            <div className="DCV2-Cocktails-texte">
                <div className="DCV2-Cocktails-title">
                    <h2>Nos Cocktails</h2>
                </div>
                <div className="DCV2-Cocktails-block-p">
                    <p className='DCV2-Cocktails-block-p-span'>
                        <span>Nous vous présentons notre carte de Cocktails.</span>
                       la rubrique classique (qui
                        regroupe les cocktails les plus connus pour plaire à tout
                        le monde),  et nos créations du moment
                        <span>
                     * cette carte varie selon les saisons et les
                        envies de nos Mixologues.
                        </span>
                        </p>
                </div>
            </div>
            {/* <div className="DCV2-main-swiper-cocktails"> */}
                {/* <div className="DCV2-block-right-cocktails-title">
                    <h1 className='DCV2-block-right-cocktails-title-span' >Nos Cocktails</h1>
                </div> */}
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
                                <div className="DCV2-cocktails-card-slider-main">
                                    <SwiperSlide className="DCV2-cocktails-card-slider" key={nom}>
                                        <div className="DCV2-block-right-cocktails-card-slider-main">
                                            <p className='DCV2-block-right-cocktails-card-slider-p' >
                                                {/* <span className='DCV2-block-right-cocktails-card-slider-categories'>{cocktail.categories} </span> */}
                                                <span className='DCV2-block-right-cocktails-card-slider-nom'>{cocktails.nom}</span>

                                                <span className='DCV2-block-right-cocktails-card-slider-ingredients'>{cocktails.ingredients} </span>
                                                <span className='DCV2-block-right-cocktails-card-slider-description'>{cocktails.description} </span>
                                            </p>
                                            <div className='DCV2-block-right-cocktails-card-slider-contenair-img'>
                                            <img className='DCV2-block-right-cocktails-card-slider-img' src={cocktails.image} alt={cocktails.nom} />
                                        </div>
                                        </div>
                                        
                                    </SwiperSlide>
                                    </div>
                                ))}
                    </Swiper>


                </div>
            {/* </div> */}

        </div>



    );
};

export default DrinksCocktails;