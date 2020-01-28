/* eslint-disable no-lone-blocks */
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
  
  
      
      //percorre todo o json recebido
    render(){
      var dados = this.state.items;
      //console.log(dados);
      /*
      for(let u=0;u<this.state.items.length;u++){         
        console.log(this.state.items[u].name);
        for(let i = 0;i<this.state.items[u].galaxyList.length;i++){
            console.log(this.state.items[u].galaxyList[i].name);
            for(let j = 0;j<this.state.items[u].galaxyList[i].solarSystem.length;j++){
                console.log(this.state.items[u].galaxyList[i].solarSystem[j].name);
                for( let p=0;p<this.state.items[u].galaxyList[i].solarSystem[j].planet.length;p++){
                    console.log(this.state.items[u].galaxyList[i].solarSystem[j].planet[p].name);
                }
                for( let s=0;s<this.state.items[u].galaxyList[i].solarSystem[j].star.length;s++){
                    console.log(this.state.items[u].galaxyList[i].solarSystem[j].star[s].name);
                }
                for( let b=0;b<this.state.items[u].galaxyList[i].solarSystem[j].blackHole.length;b++){
                    console.log(this.state.items[u].galaxyList[i].solarSystem[j].blackHole[b].name);
                }
    
            }
    
    
        }
      }
      */
      return(
        //fffffffffffffffff
          <div className="Listarrecebidas">
            <ul id="universelist"> 


            </ul>  
                        
            {
            
            dados.forEach((universe)=>{ 
              
                document.getElementById("universelist").innerHTML = document.getElementById("universelist").innerHTML+"<pre>"+universe.name+"</pre>";     
      
                  {universe.galaxyList.forEach((galaxy)=>{
                        
                        document.getElementById("universelist").innerHTML = document.getElementById("universelist").innerHTML+"<pre>  "+galaxy.name+"</pre>"; 
         
                          galaxy.solarSystem.forEach((solarsystem)=>{
                                
                                  document.getElementById("universelist").innerHTML = document.getElementById("universelist").innerHTML+"<pre>    "+solarsystem.name+"</pre>";    
                     
                                  solarsystem.blackHole.forEach((blackhole)=>{
                                    
                                    document.getElementById("universelist").innerHTML = document.getElementById("universelist").innerHTML+"<pre>       "+blackhole.name+"</pre>";    
                                  })
           
                                  solarsystem.planet.forEach((planet)=>{
                                    
                                    document.getElementById("universelist").innerHTML = document.getElementById("universelist").innerHTML+"<pre>       "+planet.name+"</pre>";  
                                  })
                          
                                  solarsystem.star.forEach((star)=>{
                                    
                                    document.getElementById("universelist").innerHTML = document.getElementById("universelist").innerHTML+"<pre>       "+star.name+"</pre>";   
                                  })
                                  
                                  
                          })
                         
                          
                  })}
            
                  
            })
            
            }
          
          </div>
      );
    }
       

 
    
  }
