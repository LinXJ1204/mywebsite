import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./home.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Bodycomponent() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="containimg"><img src={require("../photo/04.jpg")}/></div></SwiperSlide>
        <SwiperSlide><img src={require("../photo/01.jpg")}/></SwiperSlide>
        <SwiperSlide><img src={require("../photo/02.jpg")}/></SwiperSlide>
        <SwiperSlide><img src={require("../photo/03.jpg")}/></SwiperSlide>
        <SwiperSlide><img src={require("../photo/04.jpg")}/></SwiperSlide>
        <SwiperSlide><img src={require("../photo/05.jpg")}/></SwiperSlide>
        <SwiperSlide><img src={require("../photo/06.jpg")}/></SwiperSlide>
        <SwiperSlide><img src={require("../photo/03.jpg")}/></SwiperSlide>
        <SwiperSlide><img src={require("../photo/04.jpg")}/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Bodycomponent;
