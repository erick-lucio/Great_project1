



function verifylogin(){
    var name = document.getElementById('login');
    var password = document.getElementById('password');
            
    if(name.value == "" || password.value == ""){
        alert("Login or Password Wrong");
    }else{
        if(name.value == "erick" && password.value == "erick"){
            alert("welcome erick");
        }else{
          alert("Login or Password Wrong"); 
        }
    }
    
    
}

////////////////


function getrequest(){

    
    $.get( "http://localhost:8080/erick", function(data) {
        
        let obj = JSON.parse(data);
        //console.log(obj);
       
        //console.log(obj['name']);
        dealwithjson(obj);
    });

    
}

function dealwithjson(jsonObj){
    //var countKey = Object.keys(jsonObj.name).length;
   // console.log( countKey);
     //console.log(jsonObj["name"]+" id: "+jsonObj['id']);
    // console.log(jsonObj.galaxyList[0].solarSystem[0].planet.length);
    //console.log(jsonObj["galaxyList"][0]["solarSystem"][0]["star"][0]["name"]);
    //console.log(jsonObj["galaxyList"][0]["solarSystem"][0]["blackHole"][0]["name"]);
    
    console.log(jsonObj.name);
    for(let i = 0;i<jsonObj.galaxyList.length;i++){
        console.log(jsonObj.galaxyList[i].name);
        for(let j = 0;j<jsonObj.galaxyList[i].solarSystem.length;j++){
            console.log(jsonObj.galaxyList[i].solarSystem[j].name);
            for( let p=0;p<jsonObj.galaxyList[i].solarSystem[j].planet.length;p++){
                 console.log(jsonObj.galaxyList[i].solarSystem[j].planet[p].name);
            }
            for( let s=0;s<jsonObj.galaxyList[i].solarSystem[j].star.length;s++){
                 console.log(jsonObj.galaxyList[i].solarSystem[j].star[s].name);
            }
            for( let b=0;b<jsonObj.galaxyList[i].solarSystem[j].blackHole.length;b++){
                 console.log(jsonObj.galaxyList[i].solarSystem[j].blackHole[b].name);
            }
            
        }
        
        
    }
     //$( ".second-main" )
    // .append( document.createTextNode( "!!!" ) )
    // .css( "color", "red" );  
}