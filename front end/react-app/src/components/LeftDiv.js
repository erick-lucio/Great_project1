import React from 'react';
import me from '../imgs/me.jpg';

import homeImg from '../imgs/home.png';
import telephoneImg from '../imgs/telefone.png';
import languagesImg from '../imgs/languages.png';
import mailImg from '../imgs/mail.png';
import todolistImg from '../imgs/todolist.png';
import toolsImg from '../imgs/tools.png';

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
                        <div className="w3-container personalInfo">
                        <p><img alt="" className="IconImg" src={toolsImg}></img>Full Stack Developer</p>
                        <p><img alt="" className="IconImg" src={homeImg}></img>Belo Horizonte, MG</p>
                        <p><img alt="" className="IconImg" src={mailImg}></img>ericklucio-suv@hotmail.com</p>
                        <p><img alt="" className="IconImg" src={mailImg}></img>ericklucio.suv@gmail.com</p>
                        <p><img alt="" className="IconImg" src={telephoneImg}></img>55 (31)999986918</p>
                        </div>
                    </div>
                    <div className="w3-container skillDiv">
                        <h1><img alt="" className="IconImgG" src={toolsImg}></img>Skills</h1>
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
                    <div className="w3-container languagesDiv">
                        <h1><img alt="" className="IconImgG" src={languagesImg}></img>Languages</h1>
                        <ul>
                        <ProgressBar name="Portuguese" valuebar="90"/>
                        <ProgressBar name="English" valuebar="50"/>
               
                        </ul>
                    </div>
                    <div className="w3-container TodolistDiv">
                         <h1><img alt="" className="IconImgG" src={todolistImg}></img>To Study List</h1>
                         <ul>
                             <p className="CheckboxName">Java<input className="Checkbox" type="checkbox" disabled  checked></input></p>    
                             <p className="CheckboxName">Git<input className="Checkbox" type="checkbox" disabled  checked></input></p>    
                             <p className="CheckboxName">HTML/HTML5<input className="Checkbox" type="checkbox" disabled  checked></input></p>  
                             <p className="CheckboxName">CSS/CSS3<input className="Checkbox" type="checkbox" disabled  checked></input></p>  
                             <p className="CheckboxName">JS<input className="Checkbox" type="checkbox" disabled  checked></input></p>  
                             <p className="CheckboxName">React.js<input className="Checkbox" type="checkbox" disabled  checked></input></p>  
                             <p className="CheckboxName">Spring<input className="Checkbox" type="checkbox" disabled  checked></input></p>  
                             <p className="CheckboxName">Maven<input className="Checkbox" type="checkbox" disabled  checked></input></p>  
                             <p className="CheckboxName">C/C++<input className="Checkbox" type="checkbox" disabled  checked></input></p>  
                             <p className="CheckboxName">React Native<input className="Checkbox" type="checkbox" disabled  ></input></p>  
                             <p className="CheckboxName">IA<input className="Checkbox" type="checkbox" disabled  ></input></p>  
                             <p className="CheckboxName">Data Security<input className="Checkbox" type="checkbox" disabled  ></input></p>  
                             <p className="CheckboxName">Kotlin<input className="Checkbox" type="checkbox" disabled  ></input></p>  
                             <p className="CheckboxName">Node<input className="Checkbox" type="checkbox" disabled  ></input></p>  
                             <p className="CheckboxName">Python<input className="Checkbox" type="checkbox" disabled  ></input></p>  
                             <p className="CheckboxName">Docker/Container<input className="Checkbox" type="checkbox" disabled  ></input></p>  

                             <h3 className="Advise1">The unchecked boxes means that i am planing to study that .</h3>   
                         </ul>
                    </div>
                </div>
            </div>
        );
    }
}