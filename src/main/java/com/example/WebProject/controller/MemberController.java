package com.example.WebProject.controller;

import com.example.WebProject.domain.Address;
import com.example.WebProject.domain.Member;
import com.example.WebProject.service.MemberService;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.implementation.bind.MethodDelegationBinder;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;


@RequiredArgsConstructor
@RestController
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/api/member/createMember")
    public String testIndex(@RequestBody Map map) {
        System.out.println("map = " + map);
        Address address = new Address(map.get("city").toString(),map.get("street").toString(), map.get("zipcode").toString());
        Member member = new Member();
        member.setName(map.get("name").toString());
        member.setAddress(address);
        memberService.join(member);
        return "testIndex";
    }

}
