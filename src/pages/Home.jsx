import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Presentation from '../components/presentation/Presentation';
import News from '../components/news/News';
import Drinks from '../components/drinks/Drinks-MainV2';
import Prestations from '../components/prestation/Prestations';
import Footer from '../components/footer/Footer';


const Home = () => {

    function scrollToComponent(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }


    return (
        <div className='Home-main'>
            <Navigation scrollToComponent={scrollToComponent} />
            <div className='body-2'>
                <Presentation />
                <News />
                <Drinks />
                <Prestations />
            </div>
            <Footer scrollToComponent={scrollToComponent} />

        </div>
    );
};

export default Home;