package com.example.WebProject.service;


import com.example.WebProject.domain.Delivery;
import com.example.WebProject.domain.Item.Item;
import com.example.WebProject.domain.Member;
import com.example.WebProject.domain.Order;
import com.example.WebProject.domain.OrderItem;
import com.example.WebProject.repository.ItemRepository;
import com.example.WebProject.repository.MemberRepository;
import com.example.WebProject.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final MemberRepository memberRepository;
    private final ItemRepository itemRepository;

    /**
     * 주문
     */
    @Transactional
    public Long order(Long memberId, Long itemId, int count){
        //엔티티 조회
        Member member = memberRepository.findOne(memberId);
        Item item = itemRepository.findOne(itemId);
        // 배송 정보 생성
        Delivery delivery = new Delivery();
        delivery.setAddress(member.getAddress());

        //주문 상품
        OrderItem orderItem = OrderItem.createOrderItem(item, item.getPrice(),count);

        //주문 생성
        Order order = Order.createOrder(member,delivery,orderItem);

        //주문 저장
        orderRepository.save(order);
        return order.getId();
    }
    /**
     * 취소
     */

    public void orderCancel(Long orderId){
        //주문 엔티티 조회
        Order order = orderRepository.findOne(orderId);
        //주문 취소
        order.cancel();
    }

    //Entity에 로직들을 몰아넣는 스타일을 도메인 모델 패턴이라고 부른다.

    //검색
 /*   public List<Order> findOrders(OrderSearch orderSearch){
        return orderRepository.findAll(orderSearch)
    }
*/
}
