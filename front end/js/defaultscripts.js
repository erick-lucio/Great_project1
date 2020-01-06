



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

$(document).ready(function() {
    $(".right-div-side").hide();
    
    //barra de fora

    $(".menu-bars").click(function(){
    if($(".right-div-side").is(':visible')){
        //volta
       $('.menu-bars').animate({
            right:'0px'
        },'fast'); 
        $('.right-div-side').animate({
         width:'0px' 
        },
            'fast'
                                    );
        

        $('.right-div-side').toggle();
        
    }else{
        // ida
        $('.right-div-side').toggle();
        $('.right-div-side').animate({
          width:'350px' ,
            
        },
            'medium'
                                    );
       $('.menu-bars').animate({
            right:'350px'
        },
            'medium'
                               ) 
    }

        

        
        
    });
   // barra de dentro .menu-bars-inside
    //
    

    
});
	

