package com.example.WebProject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class APIController {

    @GetMapping("/hello")
    public HashMap hello(){
        HashMap result = new HashMap();
        result.put("message","안녕하세요");
        return result;
    }
}
