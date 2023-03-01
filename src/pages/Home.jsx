import React from 'react';
// import '../style/page/_Home.scss';
import Navigation from '../components/navigation/Navigation';
import Presentation from '../components/presentation/Presentation';
import News from '../components/news/News';
// import Cocktails from '../components/Cocktails-Main';
import Drinks from '../components/drinks/Drinks-MainV2';
import Prestations from '../components/prestation/Prestations';
import Footer from '../components/footer/Footer';







const Home = () => {

    function scrollToComponent(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }



    //* button to scroll to top

    // const [isVisible, setIsVisible] = useState(false);

    // const toggleVisibility = () => {
    //     if (window.pageYOffset > 300) {
    //         setIsVisible(true);
    //     } else {
    //         setIsVisible(false);
    //     }
    // };

    // const scrollToTop = () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", toggleVisibility);
    //     return () => {
    //         window.removeEventListener("scroll", toggleVisibility);
    //     };
    // }, []);

    //**end button scroll to top  */

    return (
        <div className='Home-main'>
                <Navigation scrollToComponent={scrollToComponent}  />
                {/* {isVisible && (

                    <button className={`scrollToTop ${isVisible ? 'show' : ''}`} onClick={scrollToTop}><i className="icon-scroll-to-top fa fa-chevron-up"></i></button>
                )} */}
                <div className='body-2'>
                <Presentation />

                <News />
                <Drinks />
                
                {/* <Cocktails /> */}

                <Prestations />
                 </div>
                <Footer scrollToComponent={scrollToComponent} />
       
        </div>
    );
};

export default Home;