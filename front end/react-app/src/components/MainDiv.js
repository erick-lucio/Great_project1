import React from 'react';

import RightDiv from './RightDiv';
import LeftDiv from './LeftDiv';
import LeftMenu from './LeftMenu';
import Footer from './Footer';



export default class MainDiv extends React.Component{
    render(){
        return(
            <div className="w3-container MainDiv"> 
                <LeftDiv />
                <RightDiv />
                
            </div>
        );

    }
}