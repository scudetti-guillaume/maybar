import React, { useState } from 'react';
import Modalprestation from './Modal-prestation';
// import "../style/components/_Block-photos-prestation.scss";


const BlockPhotosPrestation = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const openModal = (src) => {
        setSelectedImage(src);
    };
    const closeModal = () => {
        setSelectedImage(null);
    };
    return (
    <>
            
        <div className='Prestation-photo-main'>
        
            <div className="Prestation-photo-main-grid"> 
            {/* <div className="Prestation-texte-grid-1">gfhgfhfgh</div>  */}
                <img className="Prestation-photo-grid-2" src='./photos-illustration/barbehind.jpg' alt='presta-1' onClick={() => openModal('./photos-illustration/barbehind.jpg')} ></img>
                <img className="Prestation-photo-grid-3" src='./photos-illustration/bartender2.jpg' alt="prestation-3" onClick={() => openModal('./photos-illustration/bartender2.jpg')}></img>
                <img className="Prestation-photo-grid-4" src='./photos-illustration/nigthbar2.jpg' alt="prestation-4" onClick={() => openModal('./photos-illustration/nigthbar2.jpg')}></img>
                <img className="Prestation-photo-grid-5" src='./photos-illustration/bartender1.jpg' alt="prestation-5" onClick={() => openModal('./photos-illustration/bartender1.jpg')}></img>  
           
            </div> 
            
        </div>
            
       { selectedImage && <Modalprestation className='Modalprestation' src={selectedImage} onClose={closeModal} /> }
        </>
    );
};

export default BlockPhotosPrestation;