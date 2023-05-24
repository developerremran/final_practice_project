import React from 'react';
import SectionTitle from '../../SheardSection/SectionTitle/SectionTitle';
import './Future.css';

import Fimg from  '../../assets/home/featured.jpg'

const FutureSection = () => {
    return (
        <div className='mt-28'>
            <section>
            <SectionTitle subTitle={'---Check it out---'} mainTitle={'FROM OUR MENU'}></SectionTitle>
            </section>

            <section className=' bg_st bg-fixed'>

                <div className=' bg-black h-[600px]  bg-opacity-50 md:flex  sm:block  md:justify-center md:items-center md:px-56 sm:px-5
                 '>
                    <div className='sm:flex md:none sm:justify-center'>
                        <img className='md:w-3/4 sm:w-1/3' src={Fimg} alt="" />
                    </div>
                    <div className='text-white sm:mt-10 md:mt-0'>
                         <p className='text-sm font-bold '>March 20, 2023</p>
                         <p className='text-2xl font-semibold'>WHERE CAN I GET SOME?</p>
                         <p className='text-sm text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FutureSection;