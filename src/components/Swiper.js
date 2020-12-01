import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper-bundle.css';
import './../App.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
      spaceBetween={6}
      slidesPerView={1.3}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/categories/ropa-interior-prominent.jpg" alt="First slide"></img></SwiperSlide>
      <SwiperSlide><img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/categories/seamless-prominent.jpg" alt="Second slide"></img></SwiperSlide>
      <SwiperSlide><img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/categories/tapabocas-prominent.jpg" alt="Third slide"></img></SwiperSlide>      
      
    </Swiper>
  );
};