import React from 'react';
import Banner from '../Components/Banner';
import OrderCarosel from '../Components/OrderCarusel/OrderCarosel';
import NoticeSection from '../Components/NoticeSection/NoticeSection';
import MenuServiceSection from '../Components/MenuService/MenuServiceSection';
import CallToAction from '../Components/CallToAction/CallToAction';
import ChefRecomendedSection from '../Components/ChefRecomendedSection/ChefRecomendedSection';
import FutureSection from '../Components/FutureSection/FutureSection';
import Testimonials from '../Components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <OrderCarosel></OrderCarosel>
             <NoticeSection></NoticeSection>
             <MenuServiceSection></MenuServiceSection>
             <CallToAction></CallToAction>
             <ChefRecomendedSection></ChefRecomendedSection>
             <FutureSection></FutureSection>
             <Testimonials></Testimonials>
             
        </div>
    );
};

export default Home;