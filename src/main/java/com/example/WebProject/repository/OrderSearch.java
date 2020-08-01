package com.example.WebProject.repository;


import com.example.WebProject.domain.OrderStatus;
import lombok.Getter;
import lombok.Setter;



@Getter @Setter
public class OrderSearch {
    private String memberName; //회원의 이름
    private OrderStatus orderStatus; //주문 상태[Order, Cancel]
}