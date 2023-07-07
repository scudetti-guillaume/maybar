import React from 'react';
// import "../style/components/_Block-photos-news.scss";


const Blockphotos = () => {
    return (
        <div className='News-block-photo-main'>
            <div className="News-block-photo">
                <img className="News-photo-1" src="./photos-illustration/bartender2.jpg" alt="reseau-1" />
                {/* <iframe className="News-photo-1" title='insta' src='https://www.instagram.com/reel/CnwATGvhPGG/?utm_source=ig_web_button_share_sheet' alt="reseau-1"> </iframe> */}
                <p className='News-texte-photo-2'>
                    <span className='News-texte-photo-2-span' > Petite création :</span>
                    <br />
                    <span className='News-texte-photo-2-span'> Noël fashioned !</span>
                    <br />
                    <span className='News-texte-photo-2-span'> - 1cl de sirop de cannelle maison</span>
                    <br />
                    <span className='News-texte-photo-2-span'>- 2cl de liqueur de pain d'épice</span>
                    <br />
                    <span className='News-texte-photo-2-span'>- 4cl a 6cl de bourbon </span>
                </p>
                <img className="News-photo-2"
                    src="./photos-illustration/derniercrea2.jpg" alt="reseau-2" />
                <p className='News-texte-photo-2bis'>
                    <span  > Whisky Sour : </span>
                    <br />
                    <span >- 5cl de whisky/bourbon</span>
                    <br />
                    <span >- 2cl de sirop de sucre de canne</span>
                    <br />
                    <span  >- 1/2 citron jaune</span>
                    <br />
                    <span  >- 1 blanc d'oeuf</span>
                    <br />
                    <span >- (option) 2 dash d Angostura </span>
                </p>
                <img className="News-photo-2bis" src="./photos-illustration/dernierecrea.jpg" alt="reseau-3" />
                <img className="News-photo-3" src="./photos-illustration/newphototest.png" alt="reseau-4" />
            </div>
        </div>
    );
};

export default Blockphotos;