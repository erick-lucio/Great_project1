import React from 'react';

import '../css/defaultcss.css';
export default class ProgressBar extends React.Component{
    render(){
        return(
                <div>
                    <li><h3>{this.props.name}</h3></li>                            
                    <progress value={this.props.valuebar} max="100" className="progressSkills" ></progress>
                </div>
        );
    }
}