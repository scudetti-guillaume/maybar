import React from "react";
import Carousel from "react-carousel";

import galerie from '../../data/data-presta'

// import "react-carousel/lib/react-carousel.css";

const ModalGaleriePrestation = ({ closeModaleGalerie }) => {

    const shouldCloseOnOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModaleGalerie();
        }
    }

    return (
        <div className="modal-galerie-presta-main " onClick={shouldCloseOnOverlayClick}>
            <div className="modal-galerie-presta-content " onClick={(e) => e.stopPropagation()}>
                <div className="modal--galerie-presta-close " onClick={closeModaleGalerie}>X</div>
                <Carousel showArrows={true}>
                    {galerie.map((picture, index) => (
                        <div className="modal-galerie-presta-pic-containerV2 " key={index}>
                            <img
                                className="modal-galerie-presta-picV2 "
                                src={picture.image}
                                alt={picture.nom}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ModalGaleriePrestation;