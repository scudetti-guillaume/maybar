import React from 'react';
// import "../style/components/_Block-twitter.scss";

const Blocktwitter = () => {
    return (
        <div className='News-block-twitter-main'>
        <div className='News-block-twitter-title'>
        Les News
        </div>
            <p className='News-block-twitter-p'>
                <span className='News-block-twitter-h2'> Nouvelle carte avec nouveau logo</span>
                <span className='News-block-twitter-span'>
                    Nouvelle carte avec nouveau logo créé par Monsieur @artofromainguyot !!!
                    <br />
                    Gros talent et vraiment au top. Le pauvre je lui ai fait modifier le logo tellement de fois mais j'adore le final !!! 
                    <br />
                    Merci encore pour tout ! </span>
                    {/* <span>lien vers le post souhait bonne année fete soirée.. </span> */}
            </p>
        </div>
    );
};

export default Blocktwitter;