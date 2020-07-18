package com.example.WebProject.domain;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;



@Entity
@Getter
@Setter
public class Member {
    @Id
    @GeneratedValue
    @Column(name = "member_id")

    private long id;
    private String name;

}


