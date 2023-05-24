import React from 'react';

const SectionTitle = ({subTitle, mainTitle}) => {
    return (
        <div className='w-1/4 text-center mx-auto py-5'>
           <p className='italic text-yellow-500'> {subTitle}</p>
            <hr className='h-[4px] bg-[#E8E8E8] mt-3' />
            
            <p className='mt-5 text-3xl font-semibold'>  {mainTitle}</p>
            <hr className='h-[4px] bg-[#E8E8E8] mt-3' />
        </div>
    );
};

export default SectionTitle;