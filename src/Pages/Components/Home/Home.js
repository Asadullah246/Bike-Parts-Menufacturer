import React from 'react';
import Banner from './Banner';
import Count from './Count';
import Discount from './Discount';
import Guarantee from './Guarantee';
import Parts from './Parts';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Guarantee></Guarantee>
            <Parts></Parts>
            <Discount></Discount>
            <Count></Count>
            
        </div>
    );
};

export default Home;