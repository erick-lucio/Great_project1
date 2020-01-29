import React from 'react';
import ApiCall from './ApiCall';
import CanvasDiv from './CanvasDiv'; 


export default class SecondDiv extends React.Component{
    render(){
        return(
        <div className="w3-container SecondDiv">
            <ApiCall/>
            <CanvasDiv/>
            
        </div>
        );
    }
}