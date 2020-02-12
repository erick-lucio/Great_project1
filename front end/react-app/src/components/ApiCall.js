
import React from 'react';


export default class ApiCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };


  }

  componentDidMount() {
    fetch('http://localhost:8080/erick')
    .then(res => res.json())
    .then((data) => {
      this.setState({ items: data })
      
    })
    .catch()
  }
  
  
      

    render(){

      return(
       <div></div>

      );
    }
       

 
    
  }
