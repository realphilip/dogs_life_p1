package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.service.DogService;
import com.db.grad.javaapi.model.Dog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DogsController {
  @Autowired
  DogService dogService;
  @GetMapping("/")
  public String getWelcome() {
    return "Dogs API is up and running!";
  }

  @GetMapping("/status")
  public String getStatus() {
    return "Dogs API is healthy!";
  }

  @GetMapping("/numdogs")
  public long getNoOfDogs(){
    return dogService.getNoOfDogs();
  }
  @GetMapping("/dogs/id/{id}")
  public Dog findDogById(@PathVariable long id){
    System.out.println(id);
    System.out.println("Find by id");
    return dogService.findDogsById(id);
  }

  @DeleteMapping("/remdog/{id}")
  public void removeDog(@PathVariable long id){
     dogService.removeDog(id);
  }

  @GetMapping ("/dogs/{name}")
  public Dog getDogByName(@PathVariable String name){
    return dogService.getDogByName(name);
  }

  @GetMapping ("/alldogs")
  public List<Dog> alldogs(){
    return dogService.alldogs();
  }

}
