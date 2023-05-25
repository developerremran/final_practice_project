import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const ContactUs = () => {
    return (
        <HelmetProvider>
            {/* <h2>OurMenu page</h2> */}
            <Helmet>
                <title>Contact Us || Bistro Restaurant</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

        </HelmetProvider >
    );
};

export default ContactUs;