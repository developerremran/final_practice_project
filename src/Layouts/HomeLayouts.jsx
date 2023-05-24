import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../SheardSection/Headers/Header';
import Footers from '../SheardSection/Footers/Footers';

const HomeLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <div className='transform relative translate-y-56'>

            <Footers></Footers>

            </div>
        </div>
    );
};

export default HomeLayouts;