import React, { useRef, useState }  from 'react';
import img1 from "../../../images/images-laptop/laptop-1.png";
import img2 from "../../../images/images-laptop/laptop-2.png";
import img3 from "../../../images/images-laptop/laptop-3.png";
import img4 from "../../../images/images-laptop/laptop-4.png";
import img5 from "../../../images/images-laptop/laptop-5.png";
import img6 from "../../../images/images-laptop/laptop-6.png";
import "./Slider.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Slider = () => {
    return (
        <div className='mt-10'>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt=''  />
              <h2 className='text-2xl text-orange-600 ml-[514px]  mt-[20px]'>DEll</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt='' />
              <h2 className='text-2xl text-orange-600 ml-[514px]  mt-[20px]'>I Pad</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt='' />
              <h2 className='text-2xl text-orange-600 ml-[514px]  mt-[20px]'>Macbook pro </h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt='' />
              <h2 className='text-2xl text-orange-600 ml-[514px]  mt-[20px]'>Acer</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt='' />
              <h2 className='text-2xl text-orange-600 ml-[514px]  mt-[20px]'>HP</h2>
            </SwiperSlide>
          </Swiper>
        </div>
      );

        }
export default Slider;