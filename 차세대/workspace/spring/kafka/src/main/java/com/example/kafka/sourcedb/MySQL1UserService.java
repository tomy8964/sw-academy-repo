package com.example.kafka.sourcedb;

import com.example.kafka.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MySQL1UserService {

    @Autowired
    private UserRepository1Impl userRepository;

    public List<User> getAllUsers() {
        return userRepository.getAllUsersFromMysql1();
    }

    public User addUser(User user) {
        return userRepository.saveUserToMysql1(user);
    }

    public User updateUser(User user, Long id) {
        return userRepository.updateUserFromMysql1(id,user);
    }

    public void deleteUserById(Long id) {
        userRepository.deleteUserFromMysql1(id);
    }
}
