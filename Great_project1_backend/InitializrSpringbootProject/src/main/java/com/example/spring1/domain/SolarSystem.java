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
public class SolarSystem {
    private String name;
    private Integer id; 
    private List<BlackHole> blackHoleList;
    private List<Planet> planetList;
    private List<Star> starList;
    
    public SolarSystem(int id) {
        this.id=id;
        blackHoleList = new ArrayList();
        planetList = new ArrayList();
        starList = new ArrayList();
        
    }
    public void addToPlanetList(Planet obj){
        this.planetList.add(obj);
    }
    public void addToStarList(Star obj){
        this.starList.add(obj);
    }
    public void addToBlackHoleList(BlackHole obj){
        this.blackHoleList.add(obj);
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

    public List<BlackHole> getBlackHole() {
        return blackHoleList;
    }

    public void setBlackHole(List<BlackHole> blackHole) {
        this.blackHoleList = blackHole;
    }

    public List<Planet> getPlanet() {
        return planetList;
    }

    public void setPlanet(List<Planet> planet) {
        this.planetList = planet;
    }

    public List<Star> getStar() {
        return starList;
    }

    public void setStar(List<Star> star) {
        this.starList = star;
    }
    
    
    
}
