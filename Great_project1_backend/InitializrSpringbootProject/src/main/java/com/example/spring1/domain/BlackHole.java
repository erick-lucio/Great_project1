/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.spring1.domain;

/**
 *
 * @author Erick
 */
public class BlackHole {
    private String name;
    private Integer id;   
    public BlackHole(int id,String name) {
        this.name = "BlackHole "+name;
        this.id=id;
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
    
}
