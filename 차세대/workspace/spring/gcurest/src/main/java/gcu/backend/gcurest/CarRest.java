package gcu.backend.gcurest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CarRest {

    @PostMapping("/api/cars")
    public Car user() {
        System.out.println("CarApicontroller start..");
        Car car = new Car(1, "K5", "Kia", 3000);

        return car;
    }

    @GetMapping("/api/getcar")
    public Car get(){
        System.out.println("CarApicontroller start..");
        Car car = new Car(1, "Grandeur", "Hyundai", 6000);

        return car;
    }
}
