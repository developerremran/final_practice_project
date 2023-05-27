import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../SheardSection/Headers/Header';
import Footers from '../SheardSection/Footers/Footers';

const HomeLayouts = () => {

    const location = useLocation()
    const deleteHeaderFooter = location.pathname.includes('login')
    const deleteHeaderFooter2 = location.pathname.includes('register')

    return (
        <div>

            {deleteHeaderFooter || deleteHeaderFooter2 || <Header></Header>}
            <Outlet></Outlet>
            <div className='transform relative translate-y-56'>

            {deleteHeaderFooter || deleteHeaderFooter2 || <Footers></Footers>}

            </div>
        </div>
    );
};

export default HomeLayouts;