import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Imports componentes
import LoginContent from './components/LoginContent.js'
import Categorias from './components/Categorias.js';
import Catalogo from './components/Catalogo.js';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <LoginContent />} />
            <Route
              exact
              path="/categorias"
              render={() => <Categorias />} />
            <Route
              exact
              path="/catalogo/digital"
              render={() => <Catalogo />} />
          </Switch>
        </BrowserRouter>        

      </div>
    );
  }
}

export default App;
