import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import {HeaderApp }from  './common/header'
import {AppFooter} from './common/footer'

class App extends Component {
  render() {
    return (
      <div className="p-grid App">
        <HeaderApp />
        <main className="p-col-12">
          <h1>Bienvenido a la biblioteca perdida de Alejandría</h1>
          <div className="container">
            <p>lorem ipsum</p>
          </div>
        </main>
        <AppFooter />
      </div>
    );
  }
}

export default App;
