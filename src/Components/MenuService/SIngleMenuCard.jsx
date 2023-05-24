import React from 'react';

const SIngleMenuCard = ({ singleData }) => {

    const { name, recipe, image, price } = singleData;
    return (
        <div className='flex space-x-5'>
            <img className='w-[100px]' style={{ borderRadius: '0px 200px 200px 200px' }} src={image} alt="" />
            <div>
                <p className='font-semibold text-xl'>{name} ------------------</p>
                <p className='text-sm'>{recipe}</p>
            </div>
            <p className='text-yellow-700'>${price}</p>
        </div>
    );
};

export default SIngleMenuCard;