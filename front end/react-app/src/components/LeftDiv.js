import React from 'react';
import me from '../imgs/me.jpg';
import matrix from '../imgs/matrix.gif';
export default class LeftDiv extends React.Component{
    render(){
        return(
            <div className="LeftDiv">
                <div className="innerLeftDiv"> 
                    <div className="imgName">
                        <img src={me} alt="" className="imgME" ></img>
                        <strong className="myName"> left div</strong>
                    </div>
                    <p>Full Stack Developer</p>
                    <p>Belo Horizonte, MG</p>
                    <p><code>ericklucio-suv@hotmail.com</code></p>
                    <p>55 (31)999986918</p>
                    <div className="skillDiv">
                        <h1>Skills</h1>
                        <ul>
                            <li><h3>CSS</h3></li>
                            
                            <progress value="22" max="100" className="progressSkills"></progress>
                            <li><h3>JS</h3></li>
                            <progress value="22" max="100" className="progressSkills"></progress>
                            <li><h3>HTML</h3></li>
                            <progress value="22" max="100" className="progressSkills"></progress>
                            <li><h3>JAVA</h3></li>
                            <progress value="22" max="100" className="progressSkills"></progress>
                            <li><h3>C++</h3></li>
                            <progress value="22" max="100" className="progressSkills"></progress>
                            <li><h3>SQL</h3></li>
                            <progress value="22" max="100" className="progressSkills"></progress>
                            <li><h3>LINUX KNOWLEDGE</h3></li>
                            <progress value="22" max="100" className="progressSkills"></progress>
                            <li><h3>REACT</h3></li>
                            <progress value="22" max="100" className="progressSkills"></progress>
                            <li><h3>SPRING</h3></li>
                            <progress value="22" max="100" className="progressSkills"></progress>
                        </ul>
                    </div>
                    <div className="languagesDiv">
                        <h1>Languages</h1>
                        <ul>
                            <li><h3>Portuguese</h3></li>
                            <progress value ="22" max="100" className="progressLanguages"></progress>
                            <li><h3>English</h3></li>
                            <progress value ="22" max="100" className="progressLanguages"></progress>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}