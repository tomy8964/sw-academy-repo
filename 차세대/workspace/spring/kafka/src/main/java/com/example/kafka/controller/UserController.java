package com.example.kafka.controller;

import com.example.kafka.domain.User;
import com.example.kafka.repository.UserRepository;
import com.example.kafka.sourcedb.UserRepository1Impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserRepository1Impl userRepository1Impl;

    // MySQL1에서 유저 정보 가져오기
    @GetMapping("/user")
    public String getUsersFromMysql1(Model model) {
        List<User> users = userRepository1Impl.getAllUsersFromMysql1();
        model.addAttribute("users", users);
        return "user";
    }

    // 새로운 유저 생성하기
    @GetMapping("/create")
    public String createUser(Model model) {
        model.addAttribute("user", new User());
        return "user";
    }

    @PostMapping("/create")
    public String createUser(User user) {
        userRepository.save(user);
        return "redirect:/users";
    }

    // 유저 정보 수정하기
    @GetMapping("/{id}/update")
    public String updateUser(@PathVariable("id") Long id, Model model) {
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid user Id:" + id));
        model.addAttribute("user", user);
        return "user";
    }

    @PostMapping("/{id}/update")
    public String updateUser(@PathVariable("id") Long id, User user, Model model) {
        User currentUser = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid user Id:" + id));
        currentUser.setName(user.getName());
        currentUser.setEmail(user.getEmail());
        userRepository.save(currentUser);
        model.addAttribute("users", userRepository.findAll());
        return "redirect:/users";
    }

    // 유저 정보 삭제하기
    @GetMapping("/{id}/delete")
    public String deleteUser(@PathVariable("id") Long id, Model model) {
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid user Id:" + id));
        userRepository.delete(user);
        model.addAttribute("users", userRepository.findAll());
        return "redirect:/users";
    }
}
