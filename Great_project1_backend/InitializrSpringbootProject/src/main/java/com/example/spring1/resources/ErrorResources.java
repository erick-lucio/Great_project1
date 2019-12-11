
package com.example.spring1.resources;

import com.example.spring1.domain.Errors;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping(value="/micael")
public class ErrorResources {
    @RequestMapping(method=RequestMethod.GET)
    public String errorMessage2(){
        return "Micael Deus do JS";
    }
    
}
