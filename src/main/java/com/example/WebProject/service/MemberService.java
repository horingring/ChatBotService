package com.example.WebProject.service;


import com.example.WebProject.domain.Member;
import com.example.WebProject.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
//intellij 약축어 main method 생성 psvm
@Transactional(readOnly = true)
@RequiredArgsConstructor//Final이 있는 것만 생성해주는 것이다. 더 나은 방법이다.
public class MemberService {

    //이게 생성자로 바로 Injection 한 것이다.
    @Autowired
    private final MemberRepository memberRepository;

    /**
     * 회원가입
     * 요런 방식으로 Transactional 방식을 생각하면 좋을 것이다.
     */
    @Transactional
    public Long join(Member member) {
        validateDuplicateMember(member);    //중복 회원 검증
        memberRepository.save(member);
        return member.getId();
    }

    //동시에 호출되면 문제가 생길 수 있다.
    //비지니스 로직에서는 최후의 방식을 생각해야된다.
    private void validateDuplicateMember(Member member) {
        List<Member> findMembers = memberRepository.findByName(member.getName());
        if (!findMembers.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }
    @Transactional(readOnly = true)
    //회원 전체 조회
    public List<Member> findAllMembers() {
        return memberRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Member findOne(Long memberId) {
        return memberRepository.findOne(memberId);
    }
}
