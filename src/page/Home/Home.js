import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Products from './Products';
import Review from './Review';
import RiderPart from './RiderPart';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <RiderPart></RiderPart>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;