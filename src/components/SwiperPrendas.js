import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper-bundle.css';
import './../App.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/textiles/bodies/808559_0.jpg" alt="Primer slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Faja Cony</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>TEXTILES</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$49.95</strong></p>                            
                          </div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/textiles/jeans/802009_0.jpg" alt="Cuarto slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Jean Oriana</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>TEXTILES</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$59.95</strong></p>                            
                          </div>
                        </div>
                    </div>
                </div>
            </div>            
        </SwiperSlide>
        <SwiperSlide>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/textiles/fajas/708028_0.jpg" alt="Primer slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Faja Heidi Cocoa</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>TEXTILES</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$79.95</strong></p>                            
                          </div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/textiles/fajas/708029_0.jpg" alt="Cuarto slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Faja Heidi</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>TEXTILES</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$79.95</strong></p>                            
                          </div>
                        </div>
                    </div>
                </div>
            </div>            
        </SwiperSlide>
        <SwiperSlide>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/textiles/fajas/2903-168_0.jpg" alt="Primer slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Faja Flavia Negro</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>TEXTILES</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$39.95</strong></p>                            
                          </div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/textiles/fajas/2903-169_0.jpg" alt="Cuarto slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Faja Elen</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>TEXTILES</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$65.95</strong></p>                            
                          </div>
                        </div>
                    </div>
                </div>
            </div>            
        </SwiperSlide>
        <SwiperSlide>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/textiles/sport/808560_0.jpg" alt="Primer slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Cinturon Royal</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>TEXTILES</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$44.95</strong></p>                            
                          </div>
                        </div>
                    </div>
                    
                </div>
            </div>            
        </SwiperSlide>
            
      
    </Swiper>
  );
};