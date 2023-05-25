import React, { useEffect, useState,  } from 'react';
import SectionTitle from '../../SheardSection/SectionTitle/SectionTitle';
import ChefProductCard from './ChefProductCard';

const ChefRecomendedSection = () => {
  
    const [data, setData] = useState([])
 

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            
            setData(data)
        })
        .catch(error => console.log(error))
    },[])
    // console.log(data);
    return (
        <div>
            <section className='mt-20'>
            <SectionTitle subTitle={'---Should Try---'} mainTitle={'CHEF RECOMMENDS'}></SectionTitle>
            </section>
            <section className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                {
                    data.slice(0,3).map(product => <ChefProductCard key={product._id} product={product}></ChefProductCard>)
                }
            </section>

            
        </div>
    );
};

export default ChefRecomendedSection;