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
      console.log(this.state.items)
    })
    .catch()
  }
  render() {
      
      //percorre todo o json recebido
        var jsonstring = "";
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
        
    
        return(
            <div>
            <ul>
              
                {this.state.items.map(function(objs,index){
                    objs.galaxyList.map(function(objs1,index1){
                        return <li key={ index1 }>{objs1.galaxyList}</li>;
                    }
                    )
                    return <li key={ index }>{objs.name}</li>;
                    
                  })}
            </ul>
         
            </div>
        );
    }
    
  }
