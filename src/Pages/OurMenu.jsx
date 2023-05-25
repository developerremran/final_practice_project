import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CoverSection from '../Components/CoverSection/CoverSection';


import bgCoverImg from "../assets/menu/banner3.jpg"

const OurMenu = () => {
    return (
        <>
            <div>
                <HelmetProvider>
                    {/* <h2>OurMenu page</h2> */}
                    <Helmet>
                        <title>OurMenu || Bistro Restaurant</title>
                        <link rel="canonical" href="https://www.tacobell.com/" />
                    </Helmet>

                </HelmetProvider >
            </div>
            <>
               <CoverSection BgCoverPic={bgCoverImg} title={'OUR MENU'} description={'Would you like to try a dish?'}></CoverSection>
            </>
        </>

    );
};

export default OurMenu;