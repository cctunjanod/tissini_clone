import React from 'react';

class Footer extends React.Component{

    constructor(props) {
        super(props);
        this.verCatalogo = this.verCatalogo.bind(this);
        
    }

    verCatalogo(event)  {
        window.location = '/catalogo/digital';
    }

    render(){
        return (
            <footer className="App-footer">
                <button className="nav-btn" onClick={this.verCatalogo}>VER CATÁLOGO DIGITAL! <span className="material-icons-outlined icon-btn">menu_book</span></button>
                <a className="nav-a"><span className="material-icons-outlined icons-footer icons-footer-activo">home</span><i className="i-icons i-icons-activo">Categorias</i></a>
                <a className="nav-a" onClick={this.verCatalogo}><span className="material-icons-outlined icons-footer">assignment_ind</span><i className="i-icons">Catálogo</i></a>
                <a className="nav-a"><span className="material-icons-outlined icons-footer">shopping_cart</span><i className="i-icons">Carrito</i></a>
            </footer>           
        );
    }
}

export default Footer;