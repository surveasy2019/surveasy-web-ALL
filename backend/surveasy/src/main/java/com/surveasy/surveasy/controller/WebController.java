package com.surveasy.surveasy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/vue")
    public String vue() {

        return "vue/index";

    }
}
