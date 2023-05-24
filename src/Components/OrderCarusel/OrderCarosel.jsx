import SectionTitle from '../../SheardSection/SectionTitle/SectionTitle';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";




import img1 from "../../assets/home/slide1.jpg"
import img2 from "../../assets/home/slide2.jpg"
import img3 from "../../assets/home/slide3.jpg"
import img4 from "../../assets/home/slide4.jpg"
import img5 from "../../assets/home/slide5.jpg"


const OrderCarosel = () => {
    return (
        <div>
            <section>
                <SectionTitle subTitle={"---From 11:00am to 10:00pm---"} mainTitle={"ORDER ONLINE"}></ SectionTitle>
            </section>

            <section>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='relative text-center'><img className='w-auto h-auto relative' src={img1} alt="" />
                    <p className='text-center text-2xl font-semibold absolute w-[300px] mx-auto bottom-0 mb-5 text-white z-10 '>Salads</p></SwiperSlide>
                    <SwiperSlide className='relative text-center'><img className='w-auto h-auto relative' src={img2} alt="" />
                    <p className='text-center text-2xl font-semibold absolute w-[300px] mx-auto bottom-0 mb-5 text-white z-10 '>Salads</p></SwiperSlide>
                    <SwiperSlide className='relative text-center'><img className='w-auto h-auto relative' src={img3} alt="" />
                    <p className='text-center text-2xl font-semibold absolute w-[300px] mx-auto bottom-0 mb-5 text-white z-10 '>Salads</p></SwiperSlide>
                    <SwiperSlide className='relative text-center'><img className='w-auto h-auto relative' src={img4} alt="" />
                    <p className='text-center text-2xl font-semibold absolute w-[300px] mx-auto bottom-0 mb-5 text-white z-10 '>Salads</p></SwiperSlide>
                    <SwiperSlide className='relative text-center'><img className='w-auto h-auto relative' src={img5} alt="" />
                    <p className='text-center text-2xl font-semibold absolute w-[300px] mx-auto bottom-0 mb-5 text-white z-10 '>Salads</p></SwiperSlide>

                    
                    
                </Swiper>
            </section>
        </div>
    );
};

export default OrderCarosel;