import React, { useState } from 'react';

const Modalprestation = ({ src, onClose }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const shouldCloseOnOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }
    const handleImageLoaded = ({ target }) => {
        const { naturalWidth, naturalHeight } = target;
        const maxWidth = window.innerWidth * 0.6; // 60vw
        const maxHeight = window.innerHeight * 0.7; // 60vh
        const widthRatio = naturalWidth / maxWidth;
        const heightRatio = naturalHeight / maxHeight;
        const ratio = Math.max(widthRatio, heightRatio);
        if (ratio > 1) {
            setDimensions({
                width: Math.floor(naturalWidth / ratio),
                height: Math.floor(naturalHeight / ratio),
            });
        }
         else if(ratio < 0.4) {
            setDimensions({
                width: Math.floor(naturalWidth * 2),
                height: Math.floor(naturalHeight * 2),
            });
         }   
         else {
            setDimensions({
                width: naturalWidth,
                height: naturalHeight,
            });
        }
    };

    return (
        <div className="modal-presta-main" onClick={shouldCloseOnOverlayClick}>
         
            <div className="modal-presta-content" onClick={(e) => e.stopPropagation()} style={dimensions}>
                <div className="modal-close-presta" onClick={onClose} >X</div>  
                <img className="modal-presta-picture" onLoad={handleImageLoaded} src={src} alt="modal"  ></img>
                   
            </div>
        </div>
    );
};

export default Modalprestation;