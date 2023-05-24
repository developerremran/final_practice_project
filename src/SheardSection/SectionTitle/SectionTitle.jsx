import React from 'react';

const SectionTitle = ({subTitle, mainTitle}) => {
    return (
        <div className='w-1/4 text-center mx-auto'>
            {subTitle}
            <hr className='h-[4px] bg-[#E8E8E8] mt-3' />
            <br />
            {mainTitle}
            <hr className='h-[4px] bg-[#E8E8E8] mt-3' />
        </div>
    );
};

export default SectionTitle;