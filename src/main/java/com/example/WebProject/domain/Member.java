package com.example.WebProject.domain;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Member {
    @Id
    @GeneratedValue
    @Column(name = "member_id")

    private long id;
    private String name;
    private String user_id;
    private String password;
    @Embedded
    private Address address;
    @OneToMany(mappedBy = "member")
    private List<Order> orders = new ArrayList<>();
}


