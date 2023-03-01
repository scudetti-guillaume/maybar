import React from 'react';
// import '../style/page/_NotFound.scss'
import { NavLink } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className='main-404'>
            <h1 className='h1-404' > OUPS 404</h1>
            {/* <img className='Nav-logo-icon' src='./icons/maybar-header-logo.png' alt='maybar logo'></img> */}
            <img className='logo-name-404' src='./icons/maybarBc.png' alt='maybar logo'></img>
            <NavLink className="NavLink-404"  to="/">
                <span className='redirection-404'>c'est par la </span>
            </NavLink>
            <h2 className='h2-404'>Page non trouvée</h2>
        </div>
    );
};

export default NotFound;