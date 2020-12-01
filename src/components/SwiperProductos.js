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
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/concord/bano/CoposBC_0.jpg" alt="Primer slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Cortina Copos</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>CONCORD</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$34.9</strong></p>                            
                          </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/concord/cocina/BelenSC_0.jpg" alt="Segundo slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Set Belen</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>CONCORD</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$54.9</strong></p>                            
                          </div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/concord/recamaras/CoposFU_0.jpg" alt="Tercer slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Cojines Copos</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>CONCORD</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$39.9</strong></p>                            
                          </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                          <img className="d-block w-100 pl-6 imgC" src="https://io.tissini.app/img/products/concord/cocina/BelenCCB_0.jpg" alt="Cuarto slide"></img>
                          <div className="card-body">                            
                            <p className="txt-sw-crd-tl"><strong>Cortina Belen</strong></p>                            
                            <p className="txt-sw-crd-cmpny"><strong>CONCORD</strong></p>                            
                            <p className="txt-sw-crd-prc"><strong>$34.9</strong></p>                            
                          </div>
                        </div>
                    </div>
                </div>
            </div>            
        </SwiperSlide>
            
      
    </Swiper>
  );
};