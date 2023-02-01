import React from "react";
import "./Swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function swiper() {
  return (
    <div className="products">
      <div className="swiper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-title">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          voluptatem architecto deserunt consequatur, corporis, voluptate eos
          labore ducimus possimus necessitatibus sequi! Magni id ex facere sit
          eius ullam nesciunt provident.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          voluptatem architecto deserunt consequatur, corporis, voluptate eos
          labore ducimus possimus necessitatibus sequi! Magni id ex facere sit
          eius ullam nesciunt provident.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          voluptatem architecto deserunt consequatur, corporis, voluptate eos
          labore ducimus possimus necessitatibus sequi! Magni id ex facere sit
          eius ullam nesciunt provident.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          voluptatem architecto deserunt consequatur, corporis, voluptate eos
          labore ducimus possimus necessitatibus sequi! Magni id ex facere sit
          eius ullam nesciunt provident.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          voluptatem architecto deserunt consequatur, corporis, voluptate eos
          labore ducimus possimus necessitatibus sequi! Magni id ex facere sit
          eius ullam nesciunt provident.
        </p>
      </div>
    </div>
  );
}

export default swiper;
