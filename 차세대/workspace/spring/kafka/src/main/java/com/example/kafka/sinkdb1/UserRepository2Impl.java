package com.example.kafka.sinkdb1;

import com.example.kafka.domain.User;
import com.example.kafka.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

//mysql2 연결
@Repository
public class UserRepository2Impl {

    @Autowired
    private UserRepository userRepository1;

    @PersistenceContext(unitName = "mysql2")
    private EntityManager entityManager;

    public List<User> getAllUsersFromMysql1() {
        return userRepository1.findAll();
    }

}
