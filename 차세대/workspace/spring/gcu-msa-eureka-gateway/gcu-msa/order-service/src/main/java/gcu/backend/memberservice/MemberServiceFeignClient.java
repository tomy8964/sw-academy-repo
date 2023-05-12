package gcu.backend.memberservice;

        import org.springframework.cloud.openfeign.FeignClient;
        import org.springframework.web.bind.annotation.GetMapping;

@FeignClient("memberservice")
public interface MemberServiceFeignClient {
        @GetMapping(value = "/api/member", consumes = "application/json")
        Member getMember();
}

