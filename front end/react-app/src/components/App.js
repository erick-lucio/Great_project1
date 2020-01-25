import React from 'react';

import Header from './Header';
import MainDiv from './MainDiv';
import Footer from './Footer';
import LeftMenu from './LeftMenu';

//import 'bootstrap/dist/css/bootstrap.min.css';

import './LayoutTemplate.css';
export default class App extends React.Component{
  render(){
    return(
      <div className="MainContainer">
        <Header />
        <MainDiv />
        <Footer /> 
        <LeftMenu /> 
        
      </div>
    );
  }
}