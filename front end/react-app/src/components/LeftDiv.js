import React from 'react';
import me from '../imgs/me.jpg';
import matrix from '../imgs/matrix.gif';

import ProgressBar from './ProgressBar';

export default class LeftDiv extends React.Component{
    render(){
        return(
            <div className="w3-container LeftDiv">
                <div className="w3-container innerLeftDiv"> 
                    <div className="imgName">
                        <img src={me} alt="" className="w3-container imgME" ></img>
                        <strong className="myName">Erick Lucio</strong>
                    </div>
                    <div className="w3-container myinfo">
                        <p>Full Stack Developer</p>
                        <p>Belo Horizonte, MG</p>
                        <p><code>ericklucio-suv@hotmail.com</code></p>
                        <p>55 (31)999986918</p>
                    </div>
                    <div className="w3-container skillDiv">
                        <h1>Skills</h1>
                        <ul>
                            <ProgressBar name="CSS" valuebar="30"/>
                            <ProgressBar name="JS" valuebar="50"/>
                            <ProgressBar name="HTML" valuebar="35"/>
                            <ProgressBar name="JAVA" valuebar="55"/>
                            <ProgressBar name="C++" valuebar="50"/>
                            <ProgressBar name="SQL" valuebar="50"/>
                            <ProgressBar name="LINUX" valuebar="40"/>
                            <ProgressBar name="REACT" valuebar="15"/>
                            <ProgressBar name="SPRING" valuebar="30"/>

                            
                        </ul>
                    </div>
                    <div className="languagesDiv">
                        <h1>Languages</h1>
                        <ul>
                        <ProgressBar name="Portuguese" valuebar="90"/>
                        <ProgressBar name="English" valuebar="50"/>
               
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}