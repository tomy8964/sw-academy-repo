package gcu.backend.memberservice;

import lombok.Data;

@Data
public class Member {

    private Long id;
    private String name;
    private String password;

}
