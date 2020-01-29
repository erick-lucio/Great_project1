import React from 'react';


import planet1IMG from '../imgs/planet1.png';


export function drawPlanet(){
   // var canvas = document.getElementsByClassName("Maincanvas");    
  //  var ctx = canvas.getContext('2d');     
    var canvas = document.getElementById("canvas2id");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 300, 250);
    //ctx.drawImage(planet1IMG, 100, 50);







    
}

export default class CanvasDrawning extends React.Component{
    render(){

        return(
            <div>
                
            </div>
        );
    }
}