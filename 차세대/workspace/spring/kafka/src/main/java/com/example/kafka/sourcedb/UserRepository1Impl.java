package com.example.kafka.sourcedb;

import com.example.kafka.domain.User;
import com.example.kafka.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;

@Repository
public class UserRepository1Impl {

    @Autowired
    private UserRepository userRepository1;

    @PersistenceContext(unitName = "mysql1")
    private EntityManager entityManager;

    public List<User> getAllUsersFromMysql1() {
        return userRepository1.findAll();
    }

    public User saveUserToMysql1(User user) {
        return userRepository1.save(user);
    }

    public void deleteUserFromMysql1(Long id) {
        userRepository1.deleteById(id);
    }

    public User updateUserFromMysql1(Long id, User updatedUser) {
        User existingUser = entityManager.find(User.class, id);
        if (existingUser == null) {
            return null;
        }
        existingUser.setName(updatedUser.getName());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setAge(updatedUser.getAge());
        return userRepository1.save(existingUser);
    }
}
