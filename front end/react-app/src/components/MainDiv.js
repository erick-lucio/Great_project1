import React from 'react';

import RightDiv from './RightDiv';
import LeftDiv from './LeftDiv';
import LeftMenu from './LeftMenu';

import './LayoutTemplate.css';

export default class MainDiv extends React.Component{
    render(){
        return(
            <div className="MainDiv"> 
                <LeftDiv />
                <RightDiv />
                 
            </div>
        );

    }
}