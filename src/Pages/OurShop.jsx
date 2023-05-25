import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const OurShop = () => {
    return (
        <div>
            <HelmetProvider>
                {/* <h2>OurMenu page</h2> */}
                <Helmet>
                    <title>OurShop || Bistro Restaurant</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>

            </HelmetProvider >
        </div>
    );
};

export default OurShop;