import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CoverSection from '../Components/CoverSection/CoverSection';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import bgimg from "../assets/shop/banner2.jpg"
import OrderCardM from '../Components/OrderCard/OrderCardM';
import menuHook from '../CustomHooks/CustomHook';
import { useParams } from 'react-router-dom';


const OurShop = () => {
    const [data, loading] = menuHook()

    const categoryes = ['salad','pizza','soup','dessert','drinks',]
    const { category } = useParams()
    console.log(category);

    const intialIndex = categoryes.indexOf(category)

    const [tabIndex, setTabIndex] = useState(intialIndex)

    const salad = data.filter(product => product.category === 'salad')
    const drinks = data.filter(product => product.category === 'drinks')
    const popular = data.filter(product => product.category === 'popular')
    const dessert = data.filter(product => product.category === 'dessert')
    const pizza = data.filter(product => product.category === 'pizza')
    const soup = data.filter(product => product.category === 'soup')

 


    return (
        <div>
            <HelmetProvider>
                {/* <h2>OurMenu page</h2> */}
                <Helmet>
                    <title>OurShop || Bistro Restaurant</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
                <>
                    <CoverSection BgCoverPic={bgimg} title={'OUR SHOP'} description={'Would you like to try a dish?'}></CoverSection>
                </>
            </HelmetProvider >


            <>
                {/* react tabs section started  */}
                <Tabs className='mt-16' defaultIndex={tabIndex} onSelect={(index)=>{
                    setTabIndex(index)}}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINK</Tab>
                         
                    </TabList>


                  {/* here is write content 👇👇👇👇 */}

                    <TabPanel>
                        <OrderCardM item={salad}></OrderCardM>
                    </TabPanel>

                    <TabPanel>
                    <OrderCardM item={pizza}></OrderCardM>
                    </TabPanel>
                    
                    <TabPanel>
                    <OrderCardM item={soup}></OrderCardM>

                    </TabPanel>

                    <TabPanel>
                    <OrderCardM item={dessert}></OrderCardM>

                    </TabPanel>
                    
                    <TabPanel>
                    <OrderCardM item={drinks}></OrderCardM>

                    </TabPanel>
                  
                </Tabs>

            </>
        </div>
    );
};

export default OurShop;