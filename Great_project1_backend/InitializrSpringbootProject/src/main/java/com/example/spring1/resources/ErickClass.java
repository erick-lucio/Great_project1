
package com.example.spring1.resources;

import com.example.spring1.domain.Main;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value="/erick")
public class ErickClass {
    String jsonstring;
    @RequestMapping(method=RequestMethod.GET)
    public String categoria(){
        Main main = new Main();
        main.createAllInstances();
        //
                ObjectMapper maper = new ObjectMapper();
        try{
                jsonstring = maper.writeValueAsString(main.getUniverseList());
                System.out.println(jsonstring);   
        }catch(Exception e){
            jsonstring = "Error try again later";
        }
        //1
        return jsonstring;
    }
    
}
