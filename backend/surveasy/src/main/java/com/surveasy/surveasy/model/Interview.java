package com.surveasy.surveasy.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter
public class Interview {

    @Id @GeneratedValue
    @Column(name="itv_id")
    private Long id;

    private String title;

    private String date;

    private boolean isValid;

}
