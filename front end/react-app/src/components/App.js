import React from 'react';

import Header from './Header';
import MainDiv from './MainDiv';
import Footer from './Footer';
import LeftMenu from './LeftMenu';

import ProgressBar from './ProgressBar';


//import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/defaultcss.css';
import '../css/LayoutTemplate.css';

import SecondDiv from './SecondDiv';
import CanvasDrawning from './CanvasDrawning';

export default class App extends React.Component{
  render(){
    return(
      <div >
        <Header />
        <div className="w3-container">
        
        <MainDiv />
        
        <LeftMenu /> 
        <SecondDiv/>
        

        </div>        
        <Footer /> 
        
      </div>
    );
  }
}