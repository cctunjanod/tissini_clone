import React from 'react';
import logo from './../assets/images/logo.png';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class LoginContent extends React.Component{      
    
    constructor(props) {
        super(props);        
        this.state = {value: '',classLbl : 'lbl-ipt'};
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }
    
    handleOnFocus(event) {    this.setState({classLbl: this.state.classLbl + ' lbl-ipt-activo'}); }
    handleOnBlur(event)  {    
        if (this.state.value === '') {
            this.setState({classLbl: 'lbl-ipt'});                                                              
        }else{
            this.setState({classLbl: this.state.classLbl + ' lbl-ipt-activo'});
        }  
    }
    handleChange(event)  {    
        this.setState({value: event.target.value});
        if (event.target.value === '7865470213') {          
            window.location = '/categorias';
        }
    }

    render(){         
        return (
            <div className="bkg">
                <div className="contenido">
                    <img src={logo} className="logo" alt="logo tienda" />
                    <h3 className="text">Ingresa el número de teléfono <br/> de tu asesora independiente.</h3>                
                    <div className="div-form">
                        <form>
                            <div className="div-ipt">
                                <label className={this.state.classLbl}>Telefono</label>
                                <input onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} value={this.state.value} onChange={this.handleChange} className="ipt" type="tel" maxLength="12"></input> 
                            </div>                       
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginContent;