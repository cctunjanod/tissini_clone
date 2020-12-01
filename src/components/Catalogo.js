import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './../App.css';

class Catalogo extends React.Component{

    render(){
        return (
            <div className="div-catalogo" allow="fullscreen">
                <iframe className="iframe-catalogo" src="https://viewer.ipaper.io/tissini/tissini-mercadeo/textil-oi-2021/?_hsenc=p2ANqtz-8H6SIZ0hOKR7ME0GM5sqqF_A-2G_7KBFIUGLBDNO4c2aQsqB0BYR5i1JNsIsQD24a29f22NZ52IoKnw5CCOw3dX224VA&_hsmi=62975861&hsctatracking=e5e9ff92-44bc-41a6-936f-afc400696a96%7C76f2874b-9b51-4742-8ce3-9d6b0fe47b8a&page=1&utm_content=62975861&utm_medium=email&utm_source=hs_automation">
                
                </iframe> 
            </div>                      
        );
    }
}

export default Catalogo;