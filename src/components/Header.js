import React from 'react';

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.goIndex = this.goIndex.bind(this);
        
    }

    goIndex(event)  {
        window.location = '/';
    }

    render(){
        return (
            <div className="div-header w-100">
                <header className="App-header">
                    <h1 className="title-header">Ferchito Store</h1>                
                    <div className="capa-iconos">                    
                        <a href="tel:786-547-0213"><div className="div-icons"><span className="material-icons icons-header">phone</span></div></a>
                        <button className="btn-icon" type="button" onClick={this.goIndex}><div className="div-icons"><span class="material-icons icons-header">exit_to_app</span></div></button>
                    </div>
                </header>
            </div>                       
        );
    }
}

export default Header;