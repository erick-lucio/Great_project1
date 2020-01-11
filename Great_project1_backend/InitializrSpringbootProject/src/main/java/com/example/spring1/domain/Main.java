
package com.example.spring1.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Random;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import net.minidev.json.writer.ArraysMapper;

//@Entity
public class Main implements Serializable{
   private static final long SerialVersionUID = 1L; 
   
   //@Id
   //@GeneratedValue(strategy = GenerationType.IDENTITY)
   int mabdsuzsim;
   private static Integer id;  
   
   private static int universesCreated = 1;
   private static int galaxiesCreated = 1;  
   private static int solarSystemsCreated = 1;
   private static int planetsCreated = 2;
   private static int starsCreated = 2;  
   private static int blackHolesCreated = 1;
   Random randomNumber;
   private List<Universe> universeList;

    public Main() {
        
        Names nameClass = new Names();
        nameClass.createLists();
        Main.id = 0;
        //parte de teste


        
        
    }

    public static long getSerialVersionUID() {
        return SerialVersionUID;
    }

    public static Integer getId() {
        return id;
    }

    public List<Universe> getUniverseList() {
        return universeList;
    }
    public void createAllInstances(){
        Names nameClass = new Names();
        
        universeList = new ArrayList();
        for(int universes = 0;universes<universesCreated;universes++){
        Universe universe = new Universe(incrementAndAddId(),nameClass.generateNames());
            for(int galaxys = 0;galaxys < galaxiesCreated ;galaxys++){
            Galaxy galaxy = new Galaxy(incrementAndAddId(),nameClass.generateNames());
                for(int solarSystems = 0;solarSystems < solarSystemsCreated;solarSystems++){
                SolarSystem solarSystem = new SolarSystem(incrementAndAddId(),nameClass.generateNames());                     
                //
                    for(int planets = 0;planets<planetsCreated;planets++){
                        Planet planet = new Planet(incrementAndAddId(),nameClass.generateNames());
                        solarSystem.addToPlanetList(planet);
                    }
                    for(int blackHoles = 0;blackHoles <blackHolesCreated;blackHoles++){
                        BlackHole blackHole = new BlackHole(incrementAndAddId(),nameClass.generateNames());
                        solarSystem.addToBlackHoleList(blackHole);
                    }
                    for(int stars = 0;stars < starsCreated;stars++){
                        Star star = new Star(incrementAndAddId(),nameClass.generateNames());
                        solarSystem.addToStarList(star);
                    }

                galaxy.addToSolarSystemList(solarSystem);
                }

            universe.addToGalaxyList(galaxy);
            }
        universeList.add(universe);
        }
    }
    int incrementAndAddId(){
        Main.id++;
        return Main.id;
    }
    public static void setId(Integer id) {
        Main.id = id;
    }

    public void setUniverseList(List<Universe> universeList) {
        this.universeList = universeList;
    }

    public static int getUniversesCreated() {
        return universesCreated;
    }

    public static void setUniversesCreated(int universesCreated) {
        Main.universesCreated = universesCreated;
    }

    public static int getGalaxiesCreated() {
        return galaxiesCreated;
    }

    public static void setGalaxiesCreated(int galaxiesCreated) {
        Main.galaxiesCreated = galaxiesCreated;
    }

    public static int getSolarSystemsCreated() {
        return solarSystemsCreated;
    }

    public static void setSolarSystemsCreated(int solarSystemsCreated) {
        Main.solarSystemsCreated = solarSystemsCreated;
    }

    public static int getPlanetsCreated() {
        return planetsCreated;
    }

    public static void setPlanetsCreated(int planetsCreated) {
        Main.planetsCreated = planetsCreated;
    }

    public static int getStarsCreated() {
        return starsCreated;
    }

    public static void setStarsCreated(int starsCreated) {
        Main.starsCreated = starsCreated;
    }

    public static int getBlackHolesCreated() {
        return blackHolesCreated;
    }

    public static void setBlackHolesCreated(int blackHolesCreated) {
        Main.blackHolesCreated = blackHolesCreated;
    }

    public Random getRandomNumber() {
        return randomNumber;
    }

    public void setRandomNumber(Random randomNumber) {
        this.randomNumber = randomNumber;
    }

  



   
   
}
