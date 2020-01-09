



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
         console.log(data);
       var jsonstring= JSON.stringify(data);
        console.log(jsonstring);
    });

    
}

