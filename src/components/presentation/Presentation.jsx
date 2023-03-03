import React, { useState } from 'react';

const Presentation = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='Pre-main'>
            <div className='Pre-Titre-1'>
                <h1 className='Pre-h1'>maybar</h1>
                <h2 className='Pre-h2'>BAR EPHEMERE</h2>
                <h3 className='Pre-h3'>
                    UN BAR MOBILE QUI VOUS SUIT POUR TOUT VOS EVENEMENTS
                </h3>
            </div>
            <div className='Pre-hide'></div>
            <p className='Pre-script'>
                <span className='Pre-script-span-1'>
                    MAYBAR a été créé par des passionnés qui veulent avant tout offrir un
                    service à la hauteur de vos événements.
                </span>
                <div className={showMore ? 'Pre-script-span-show' : 'Pre-script-span-hide'}>
                    <span className='Pre-script-span'>
                        Issue d’une formation Barman/Mixologue, nous avons pu perfectionner
                        notre savoir et apprendre à nous adapter aux demandes. Etant en
                        recherche permanente des nouveautés dans le milieu des cocktails,
                        nous pourrons vous proposer un service évolutif en fonction des
                        nouvelles tendances et des saisons.
                    </span>
                    <span className='Pre-script-span'>
                        Nous sommes là avant tout pour que vous passiez un moment inoubliable
                        sans vous soucier de savoir si vos invités ont une petite soif et
                        surtout nous voulons partager notre bonne humeur et notre envie de
                        faire connaitre des mélanges de saveurs qui raviront tous les palais.
                    </span>
                    <span className='Pre-script-span'>
                        Notre engagement : Favoriser les commerces de proximité et le "Zéro
                        déchet" en utilisant des pailles comestibles et déchets alimentaires
                        compostés.
                    </span>
                </div>
                {showMore ? (
                    <button className='Pre-script-button' onClick={handleShowMore}>
                        Voir moins
                    </button>
                ) : (
                        <button className='Pre-script-button' onClick={handleShowMore}>
                        Voir plus
                    </button>
                )}
            </p>
        </div>
    );
};

export default Presentation;