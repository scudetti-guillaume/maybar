import React from 'react';
import { NavLink } from 'react-router-dom';
import Blockphoto from './Block-photos-news';
import BlockTwitter from './Block-twitter';
// import '../style/components/news/_News.scss';

const News = () => {
    return (
        <div className='News-main' id='news-section' >
            <div className='News-block-titre'>
                <div className='News-h1'>
                    <h1 className='News-h1-span'> l'actu de Maybar</h1>
                    <h1 className='News-h1-span-mq'> Nos actus </h1>
                </div>
                <div className='News-h1-reseau'>
                    <p className='News-h1-reseau-p'>
                        pour être au courant des actus suivez-nous sur les réseaux sociaux.
                    </p> 
                    <p className='News-h1-reseau-p-mq'>
                        suivez nos actus sur les réseaux sociaux
                    </p> 
                    <p className='News-h1-reseau-p-mq-2'>
                        nos réseaux sociaux
                    </p>
                    <div className='News-block-reseau'>
                        <NavLink to="https://www.facebook.com/MaybarMobile" target='_blank' >
                            <div className='News-div-social-fb'><img className='News-social-icon-fb' src="./icons/facebook-f.svg" alt='facebook icon' /></div>
                        </NavLink>
                        <NavLink to="https://www.instagram.com/maybarmobile/" target='_blank' >
                            <div className='News-div-social-instagram'><img className='News-social-icon-insta' src="./icons/instagram.svg" alt='instagram icon' /></div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='block-New-photo'>
                <Blockphoto />
            </div>
            <div className="block-New-twitter">
                <BlockTwitter />
            </div>
        </div>
    );
};

export default News;