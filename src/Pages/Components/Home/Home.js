import React from 'react';
import Banner from './Banner';
import Count from './Count';
import Discount from './Discount';
import Footer from './Footer';
import Guarantee from './Guarantee';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Guarantee></Guarantee>
            <Parts></Parts>
            <Discount></Discount>
            <Count></Count>
            <Reviews></Reviews>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;