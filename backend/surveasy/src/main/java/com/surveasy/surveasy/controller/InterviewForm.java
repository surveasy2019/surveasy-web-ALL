package com.surveasy.surveasy.controller;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter @Setter
public class InterviewForm {

    @NotEmpty(message = "제목은 필수입니다.")
    private String title;

    private String date;

    private boolean isValid;


}