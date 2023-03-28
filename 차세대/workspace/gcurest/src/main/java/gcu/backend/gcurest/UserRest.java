package gcu.backend.gcurest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class UserRest {

    @PostMapping("/api/users")
    public User user() {
        System.out.println("UserApicontroller start..");
        User user = new User(1, "Gachon", new Date());

        return user;
    }

    @GetMapping("/api/getuser")
    public User get(){
        System.out.println("UserApicontroller start..");
        User user = new User(2, "Kakao", new Date());

        return user;
    }
}
