import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SheardSection/SectionTitle/SectionTitle';
import SIngleMenuCard from './SIngleMenuCard';
import menuHook from '../../CustomHooks/CustomHook';

const MenuServiceSection = () => {
  const [data, loading] = menuHook()
  const popularItems = data.filter(item=> item.category === "popular")

    return (
        <div>
            <section className='mt-16'>
            <SectionTitle subTitle={"---Check it out---"} mainTitle={"FROM OUR MENU"}></SectionTitle>
            </section>

            <section className='grid md:grid-cols-2 gap-10 mt-10'>
                  {
                    popularItems.map(singleData => <SIngleMenuCard key={singleData._id} singleData={singleData}></SIngleMenuCard>)
                  }
            </section>
            <div className='flex justify-center mt-10'>
              <button className='border-b-4 rounded-full px-5 py-2 btn  '>see more menu</button>
            </div>
        </div>
    );
};

export default MenuServiceSection;