import React, { useRef, useState } from "react";
import galerie from '../../data/data-presta'
import { EffectCube, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const Modalgalerieprestation = ({ closeModaleGalerie }) => {
    const [modalWidth, setModalWidth] = useState(null);
    const [modalHeight, setModalHeight] = useState(null);
    const swiperRef = useRef(null);
    const imgRef = useRef(null);
    const wrapperRef = useRef(null);
    const shouldCloseOnOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModaleGalerie();
        }
    }
    const handleSwiperInit = (swiper) => {
        swiperRef.current = swiper;
    };

    const handleImageLoaded = ({ target }) => {
        const { naturalWidth, naturalHeight } = target;
        const maxWidth = window.innerWidth * 0.5; // 50% of screen width
        const maxHeight = window.innerHeight * 0.7; // 60% of screen height
        const widthRatio = naturalWidth / maxWidth;
        const heightRatio = naturalHeight / maxHeight;
        const ratio = Math.max(widthRatio, heightRatio);
        if (wrapperRef.current) {
            wrapperRef.current.style.width = `${imgRef.current.width}px`;
            wrapperRef.current.style.height = `${imgRef.current.height}px`;
            swiperRef.current.update();
        }

        // if (swiperRef.current) {
          
        // }

        

        if (ratio > 1) {
            const width = Math.floor(naturalWidth / ratio);
            const height = Math.floor(naturalHeight / ratio);
            imgRef.current.style.width = `${width}px`;
            imgRef.current.style.height = `${height}px`;
            setModalWidth(`${width}px`);
            setModalHeight(`${height}px`);
            swiperRef.current?.wrapperEl?.classList.add("swiper--wide");
        }
        // else if (ratio < 0.4) {
        //     const width = Math.floor(naturalWidth / ratio);
        //     const height = Math.floor(naturalHeight / ratio);
        //     imgRef.current.style.width = `${width}px`;
        //     imgRef.current.style.height = `${height}px`;
        //     setModalWidth(`${width}px`);
        //     setModalHeight(`${height}px`);
        //     swiperRef.current?.wrapperEl?.classList.add("swiper--wide");
        // } 
        else {
            imgRef.current.style.width = `${naturalWidth}px`;
            imgRef.current.style.height = `${naturalHeight}px`;
            setModalWidth(`${naturalWidth}px`);
            setModalHeight(`${naturalHeight}px`)
            swiperRef.current?.wrapperEl?.classList.add("swiper--tall");;
        }
    };

    return (
        <div className="modal-galerie-presta-main" onClick={shouldCloseOnOverlayClick} >
            <div className="modal-galerie-presta-content" onClick={(e) => e.stopPropagation()} style={{ width: modalWidth, height: modalHeight }}>
                <div className="modal-galerie-presta-close" onClick={closeModaleGalerie}>X</div>
                <Swiper className="modal-galerie-presta-swiper"
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[EffectCube, Pagination]}
                    onInit={handleSwiperInit}
                >
                    <div className="swiper-wrapper" ref={wrapperRef}>
                    {galerie.map((picture, index) => (
                        <SwiperSlide key={index}>
                            <img
                                className="modal-galerie-presta-pic"
                                onLoad={handleImageLoaded}
                                src={picture.image}
                                ref={imgRef}
                                alt={picture.nom}
                            />
                        </SwiperSlide>
                    ))}
               
                </div>
                </Swiper>
            </div>
        </div>
    );

};

export default Modalgalerieprestation;