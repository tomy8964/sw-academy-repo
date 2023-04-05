package gcu.backend.gcurestdata.controller;

import gcu.backend.gcurestdata.domain.Item;
import gcu.backend.gcurestdata.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ItemController {

    @Autowired
    ItemRepository itemRepository;

    @PostMapping("/api/item")
    public String add(@RequestParam Item item) {
        itemRepository.save(item);
        return "update OK!";
    }

    @GetMapping("/api/item")
    public List<Item> get() {
        return itemRepository.findAll();
    }

    @GetMapping("/api/item/{id}")
    public Optional<Item> getId(@PathVariable("id") Long id){
        return itemRepository.findById(id);
    }
}
