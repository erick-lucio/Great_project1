/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.spring1.domain;

import java.util.List;
import java.util.ArrayList;
/**
 *
 * @author Erick
 */
public class Universe {
    private String name;
    private Integer id; 
    private List<Galaxy> galaxyList ;
    
    public Universe(int id,String name) {
        this.name = "Universe "+name;
        this.id=id;
        galaxyList = new ArrayList();
    }
    public void addToGalaxyList(Galaxy obj){
        this.galaxyList.add(obj);
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<Galaxy> getGalaxyList() {
        return galaxyList;
    }

    public void setGalaxyList(List<Galaxy> galaxyList) {
        this.galaxyList = galaxyList;
    }
    
}
