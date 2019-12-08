
package com.example.spring1.resources;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/erick")
public class CategoryResource {
    @RequestMapping(method=RequestMethod.GET)
    public String categoria(){
        return "Micael e viadao Mateus e mais!S2";
    }
    
}
