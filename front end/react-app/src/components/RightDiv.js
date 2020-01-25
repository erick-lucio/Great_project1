import React from 'react';

import UpRightDiv from './UpRightDiv';
import UpLeftDiv from './UpLeftDiv';
export default class RightDiv extends React.Component{
    render(){
        return(
            <div className="w3-container RightDiv">
                <UpRightDiv/>
                <UpLeftDiv/>
  
            </div>
        );
    }
}