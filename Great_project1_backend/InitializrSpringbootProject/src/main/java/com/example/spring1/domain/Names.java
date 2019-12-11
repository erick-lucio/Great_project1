/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.spring1.domain;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.lang.Integer;

/**
 *
 * @author Erick
 */
public class Names {
    Random randomNumber;
    static List<String> preNames;
    static List<String> usedNames;
    public Names() {

        
    }
    public void createLists(){
        preNames = new ArrayList<String>();
        usedNames = new ArrayList<String>();
        preNames.add("Pegasus");
        preNames.add("Aries");
        preNames.add("Taurus");
        preNames.add("Gemini");
        preNames.add("Cancer");
        preNames.add("Leo");
        preNames.add("Virgo");
        preNames.add("Libra");
        preNames.add("Scorpio");
        preNames.add("Sagittarius");
        preNames.add("Capricorn");
        preNames.add("Aquarius");
        preNames.add("Pisces");
        preNames.add("Dragon");
        preNames.add("Tiger");
        preNames.add("Ragnar");
        preNames.add("Goku");
        preNames.add("Naruto");
        preNames.add("Ichigo");
        preNames.add("Darth Vader");
        preNames.add("Yoda");
        preNames.add("Jack Sparrow");
        preNames.add("Joker");
        preNames.add("Gandalf");
        preNames.add("Thanos");
        preNames.add("Iron Man");
        preNames.add("Hulk");
        preNames.add("Batman");
        preNames.add("Severus Snape");
        preNames.add("Spock");
        preNames.add("Shrek");
        preNames.add("Legolas");
        preNames.add("Yasuo");
        preNames.add("Veigar");
        preNames.add("Rambo");
        preNames.add("Thor");
        preNames.add("Dracula");
        preNames.add("Sherlock");
        preNames.add("Voldemort"); 
    }
    
    public String generateNames(){
        String stringReturned;
        do{
        Random randomNumber = new Random();
        stringReturned = preNames.get(randomNumber.nextInt(this.preNames.size()))+" "+randomNumber.nextInt(999);        
        }while(usedNames.contains(stringReturned));
        usedNames.add(stringReturned);
        return stringReturned;
    }
    
}
