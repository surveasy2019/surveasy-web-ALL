package com.surveasy.surveasy.repository;

import com.surveasy.surveasy.model.Interview;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class InterviewRepository {

    private final EntityManager em;

    // 인터뷰 주문
    public void save(Interview interview) {
        em.persist(interview);
    }

    // 1개 조회
    public Interview findOne(Long id) {
        return em.find(Interview.class, id);
    };
}
