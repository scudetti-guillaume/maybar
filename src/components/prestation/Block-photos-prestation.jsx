import React from 'react';
// import "../style/components/_Block-photos-prestation.scss";


const BlockPhotosPrestation = () => {
    return (
        <div className='Prestation-photo-main'>
            <div className="Prestation-photo-main-grid"> 
            {/* <div className="Prestation-texte-grid-1">gfhgfhfgh</div>  */}
                <img className="Prestation-photo-grid-2" src='./photos-illustration/barbehind.jpg' alt='presta-1'></img>
            <img className="Prestation-photo-grid-3" src='./photos-illustration/bartender2.jpg' alt="prestation-3"></img>
              <img className="Prestation-photo-grid-4" src='./photos-illustration/nigthbar2.jpg' alt="prestation-4"></img>
            <img className="Prestation-photo-grid-5" src='./photos-illustration/bartender1.jpg' alt="prestation-5"></img>  
           
            </div> 
        </div>
    );
};

export default BlockPhotosPrestation;