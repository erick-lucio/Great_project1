
package com.example.spring1.resources;

import com.example.spring1.domain.Category;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/erick")
public class CategoryResource {
    @RequestMapping(method=RequestMethod.GET)
    public List<List> categoria(){
        Category cat1 = new Category(0,"erick");
        Category cat2 = new Category(1, "e");
        Category cat3 = new Category(2,"bolado");
        Category cat4 = new Category(3, "demais");
        Category cat5 = new Category(4,"se ta");
        Category cat6 = new Category(5, "e");
        Category cat7 = new Category(6,"doido");
        Category cat8 = new Category(7, "fon");
        Category cat9 = new Category(8,"nois q voa");
        Category cat10 = new Category(9, "#PAS");
        
        List<Category> lista1= new ArrayList<Category>();
        
        lista1.add(cat1);
        lista1.add(cat2);
        lista1.add(cat3);
        lista1.add(cat4);
        lista1.add(cat5);
        lista1.add(cat6);
        lista1.add(cat7);
        lista1.add(cat8);
        lista1.add(cat9);
        lista1.add(cat10);
        List<List> categorylist= new ArrayList<List>();
        categorylist.add(lista1);
        categorylist.add(lista1);
        categorylist.add(lista1);
        categorylist.add(lista1);
        return categorylist;
    }
    
}
