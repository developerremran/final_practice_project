import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CoverSection from '../Components/CoverSection/CoverSection';


import bgCoverImg from "../assets/menu/banner3.jpg"
import bgCoverImg2 from "../assets/home/chef-service.jpg"
// import bgCoverImg3 from "../assets/home/chef-service.jpg"
// import bgCoverImg4 from "../assets/home/chef-service.jpg"
// import bgCoverImg5 from "../assets/home/chef-service.jpg"





import SectionTitle from '../SheardSection/SectionTitle/SectionTitle';
import menuHook from '../CustomHooks/CustomHook';
import MenuCard from '../SheardSection/MenuCard/MenuCard';
import { Link, } from 'react-router-dom';
import MainMenuD from '../Components/MenuService/MainMenuD';

const OurMenu = () => {

    const [data, loading] = menuHook()

    const salad = data.filter(product => product.category === 'salad')
    const drinks = data.filter(product => product.category === 'drinks')
    const popular = data.filter(product => product.category === 'popular')
    const dessert = data.filter(product => product.category === 'dessert')
    const pizza = data.filter(product => product.category === 'pizza')
    const soup = data.filter(product => product.category === 'soup')

   



    // console.log(salad);

    return (
        <>
            <div>
                <HelmetProvider>
                    {/* <h2>OurMenu page</h2> */}
                    <Helmet>
                        <title> OurMenu || Bistro Restaurant </title>
                        <link rel="canonical" href="https://www.tacobell.com/" />
                    </Helmet>

                </HelmetProvider >
            </div>
            <>
                <CoverSection BgCoverPic={bgCoverImg} title={'OUR MENU'} description={'Would you like to try a dish?'}></CoverSection>
            </>
            <>
                <section className='mt-28'>
                    <SectionTitle subTitle={"---Don't miss---"} mainTitle={"TODAY'S OFFER"}></SectionTitle>
                </section>

                <div >
                    <MainMenuD singleData={salad} title={"salad"} ></MainMenuD>
                </div>

                <>
                    <CoverSection BgCoverPic={bgCoverImg2} title={'DESSERTS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>
                    </CoverSection>

                    <div >
                        <MainMenuD singleData={drinks} title={"drinks"}></MainMenuD>
                    </div>
                </>
                <>
                    <CoverSection BgCoverPic={bgCoverImg2} title={'PIZZA'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>
                    </CoverSection>

                    <div >
                        <MainMenuD singleData={pizza} title={"pizza"}></MainMenuD>
                    </div>
                </>
                <>
                    <CoverSection BgCoverPic={bgCoverImg2} title={'SALAD'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>
                    </CoverSection>

                    <div >
                        <MainMenuD singleData={popular} title={'popular'}></MainMenuD>
                    </div>
                </>

                <>
                    <CoverSection BgCoverPic={bgCoverImg2} title={'SOUP'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>
                    </CoverSection>

                    <div >
                        <MainMenuD singleData={soup} title={'SOUP'}></MainMenuD>
                    </div>
                </>

            </>






        </>

    );
};

export default OurMenu;