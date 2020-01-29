import React from 'react';

import planet1IMG from '../imgs/planet1.png';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

export function drawPlanet(){
    // var canvas = document.getElementsByClassName("Maincanvas");    
   //  var ctx = canvas.getContext('2d');     

     //ctx.drawImage(planet1IMG, 100, 50);

     //ctx.fillRect(20, 30, 400, 400)
     var imageObj = new Image();
     imageObj.src = '../imgs/planet1.png';
 
 
 
 
     
 }

export default class Canvas extends React.Component{
    
    render(){
        return(
            <div className="w3-container canvasDiv">
                        <canvas className="Maincanvas" ref="canvas2id"></canvas>
                        {drawPlanet()}
                        
    
            </div>
        );
    }
}