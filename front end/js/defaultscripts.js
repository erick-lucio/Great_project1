



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
        console.log(obj);
       
        //console.log(obj['name']);
        dealwithjson(obj);
    });

    
}

function dealwithjson(jsonObj){
    var countKey = Object.keys(jsonObj).length;
    console.log( countKey) ;
     //console.log(jsonObj["name"]+" id: "+jsonObj['id']);
     //console.log(jsonObj["galaxyList"][0]["solarSystem"][0]["planet"][0]["name"]);
    //console.log(jsonObj["galaxyList"][0]["solarSystem"][0]["star"][0]["name"]);
    //console.log(jsonObj["galaxyList"][0]["solarSystem"][0]["blackHole"][0]["name"]);
     //$( ".second-main" )
    // .append( document.createTextNode( "!!!" ) )
    // .css( "color", "red" );  
}