import Card from './Card';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const OrderCardM = ({ item }) => {


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (

        <>
            {/* <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                {
                    item.map(product => <Card key={product._id} product={product}></Card>)
                }
            </div> */}

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >


                <SwiperSlide>

                    <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                        {
                            item.slice(0,6).map(product => <Card key={product._id} product={product}></Card>)
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                        {
                            item.slice(6,12).map(product => <Card key={product._id} product={product}></Card>)
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                        {
                            item?.slice(12,100)?.map(product => <Card key={product._id} product={product}></Card>)
                        }
                    </div>
                </SwiperSlide>

            </Swiper>
        </>

    );
};

export default OrderCardM;