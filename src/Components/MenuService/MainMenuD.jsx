import React from 'react';
import MenuCard from '../../SheardSection/MenuCard/MenuCard';
import { Link } from 'react-router-dom';

const MainMenuD = ({ singleData,title }) => {

    return (
        <>
            <div className='grid md:grid-cols-2 gap-10 mt-10'>

                {
                    singleData.map(products => <MenuCard key={products._id} products={products}></MenuCard>)
                }
    


            </div>
            <div className='flex justify-center items-center mt-16 mb-10'>
                <Link to={`/our_shop/${title}`}>
                    <button className='btn'>ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </>
    );
};

export default MainMenuD;