package com.example.kafka.service;

import com.example.kafka.User;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class KafkaConsumer {

    @KafkaListener(topics = "kafka-demo", groupId = "kafka-demo")
    public void consume(User user) throws IOException {
        System.out.println("Consumed user id: " + user.getId());
        System.out.println("Consumed user name: " + user.getName());
        System.out.println("Consumed user age: " + user.getAge());
        System.out.println("Consumed user phonnumber: " + user.getPhoneNumber());
    }
}