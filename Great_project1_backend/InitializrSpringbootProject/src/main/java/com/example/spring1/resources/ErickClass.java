
package com.example.spring1.resources;

import com.example.spring1.domain.Main;
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
    @RequestMapping(method=RequestMethod.GET)
    public List categoria(){
        Main main = new Main();
        main.createAllInstances();
        
        return main.getUniverseList();
    }
    
}
