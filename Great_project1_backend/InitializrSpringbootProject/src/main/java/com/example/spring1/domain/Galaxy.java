/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.spring1.domain;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Erick
 */
public class Galaxy {
    private String name;
    private Integer id; 
    private List<SolarSystem> solarSystemList;  
    
    public Galaxy(int id,String name) {
        this.name = "Galaxy "+name;
        this.id=id;
        solarSystemList = new ArrayList();     
    }
    public void addToSolarSystemList(SolarSystem obj){
        this.solarSystemList.add(obj);
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

    public List<SolarSystem> getSolarSystem() {
        return solarSystemList;
    }

    public void setSolarSystem(List<SolarSystem> solarSystem) {
        this.solarSystemList = solarSystem;
    }
    
    
}
