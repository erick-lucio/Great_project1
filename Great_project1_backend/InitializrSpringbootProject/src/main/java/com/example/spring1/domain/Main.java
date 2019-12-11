
package com.example.spring1.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


public class Main implements Serializable{
   private static final long SerialVersionUID = 1L; 
   private static Integer id;   
   private List<Universe> universeList;

    public Main() {
        Names nameClass = new Names();
      
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
        universeList = new ArrayList();
        for(int universes = 0;universes<1;universes++){
        Universe universe = new Universe(4);
            for(int galaxys = 0;galaxys < 2 ;galaxys++){
            Galaxy galaxy = new Galaxy(1);
                for(int solarSystems = 0;solarSystems < 2;solarSystems++){
                SolarSystem solarSystem = new SolarSystem(2);                     
                //
                    for(int planets = 0;planets<2;planets++){
                        Planet planet = new Planet(4);
                        solarSystem.addToPlanetList(planet);
                    }
                    for(int blackHoles = 0;blackHoles <2;blackHoles++){
                        BlackHole blackHole = new BlackHole(5);
                        solarSystem.addToBlackHoleList(blackHole);
                    }
                    for(int stars = 0;stars < 2;stars++){
                        Star star = new Star(3);
                        solarSystem.addToStarList(star);
                    }

                galaxy.addToSolarSystemList(solarSystem);
                }

            universe.addToGalaxyList(galaxy);
            }
        universeList.add(universe);
        }
    }
    public static void setId(Integer id) {
        Main.id = id;
    }

    public void setUniverseList(List<Universe> universeList) {
        this.universeList = universeList;
    }

  



   
   
}
