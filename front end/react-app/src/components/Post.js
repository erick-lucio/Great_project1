import React from 'react';

export default class Post extends React.Component{
    constructor(props){
        super(props);

        this.state = {


        }
    };

  render(){
    return(
     <div>   
    <h2>{this.props.title}</h2>
    <button> GARAI MENOR</button>
    </div>
    );
  }
}