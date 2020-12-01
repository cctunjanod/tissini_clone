import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper-bundle.css';
import './../App.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/textiles/fajas/2002-150_0.jpg" alt="Primer slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Faja Elisa</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>TEXTILES</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$79.95</strong></p>                            
                          </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/textiles/jeans/808526_0.jpg" alt="Segundo slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Jean Cardi</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>TEXTILES</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$64.95</strong></p>                            
                          </div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/textiles/bodies/2002-128_0.jpg" alt="Tercer slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Body Sheila</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>TEXTILES</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$24.95</strong></p>                            
                          </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/textiles/jeans/708050_0.jpg" alt="Cuarto slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Jean Cata</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>TEXTILES</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$54.95</strong></p>                            
                          </div>
                        </div>
                    </div>
                </div>
            </div>            
        </SwiperSlide>
            
      
    </Swiper>
  );
};