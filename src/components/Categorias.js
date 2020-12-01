import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';
import Swiper from './Swiper.js';
import SwiperPro from './SwiperProductos.js';
import SwiperPrendas from './SwiperPrendas.js';
import SwiperRecomendados from './SwiperRecomendados.js';

import Modal from 'react-modal';
import 'jquery/dist/jquery.js'
import 'popper.js/dist/popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './../App.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      width                 : '400px',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Categorias extends React.Component{    
    
    constructor(props) {        
        super(props);        
        this.state = {value: true,classLbl : 'lbl-ipt lbl-ipt-modal',value_ipt: ''};
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.openModal = this.openModal.bind(this);    
        this.closeModal = this.closeModal.bind(this);
    }            

    handleOnFocus(event) {    this.setState({classLbl: this.state.classLbl + ' lbl-ipt-activo'}); }
    handleOnBlur(event)  {    
        if (this.state.value_ipt === '') {
            this.setState({classLbl: 'lbl-ipt  lbl-ipt-modal'});                                                              
        }else{
            this.setState({classLbl: this.state.classLbl + ' lbl-ipt-activo'});
        }  
    }

    handleChange(event)  {    
        this.setState({value_ipt: event.target.value});
    }

    openModal() {
        this.setState({value: true});
    }

    closeModal(){
        this.setState({value: false});
    }

    render(){
        return (
            <div>
                <button onClick={this.openModal} hidden></button>                
                <Modal
                    isOpen={this.state.value}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    shouldCloseOnOverlayClick={false}
                   /*  onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal" */
                >
                
                  <div className="div-modal">
                    <h2>¡Bienvenido!</h2>
                    <p>Si quieres recibir ofertas y estar al tanto de todos nuestros productos ingresa tu correo, al cual serás notificado.</p>
                    <div className="div-ipt-modal">
                        <label className={this.state.classLbl}>Correo</label>
                        <input onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} value={this.state.value_ipt} onChange={this.handleChange} className="ipt ipt-modal" type="mail"></input> 
                    </div>
                    <button className="nav-btn btn-modal" onClick={this.closeModal}>SUSCRIBIRME</button>
                    <div className="div-modal-cerrar">
                        <button className="btn-modal-cerrar" onClick={this.closeModal}>X</button>
                    </div>
                  </div>                                 
                </Modal>
                <Header />
                <div className="w-100 div-content mh-auto">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 frs-div">
                                <img className="w-100" src="https://mitienda.moda/img/productos-de-entrega-inmediata.e07d1e57.png" alt="productos entrega inmediata"></img>
                                <div className="btn-div">
                                    <button className="btn-ver">VER MÁS</button>
                                </div>
                            </div>                            
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-5">
                                <Swiper />
                            </div>                            
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-5">
                            <img className="w-100" src="https://io.tissini.app/img/categories/newarrivals.webp?vuetify-preload" alt="recien llegados"></img>
                            </div>                            
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-5">
                                <SwiperPro />
                            </div>                            
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-5">
                            <img className="w-100" src="https://io.tissini.app/img/categories/bestsellers.webp?vuetify-preload" alt="lo más vendido"></img>
                            </div>                            
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-5">
                                <SwiperPrendas />
                            </div>                            
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-5">
                            <img className="w-100" src="https://io.tissini.app/img/categories/recommended.webp?vuetify-preload" alt="recomendado"></img>
                            </div>                            
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-5">
                                <SwiperRecomendados />
                            </div>                            
                        </div>
                        <div className="row end">
                            <div className="col-lg-5">
                            </div>               
                        </div>                                                                       
                    </div>                                                         
                </div>
                <Footer />
            </div>
                       
        );
    }
}

export default Categorias;