package com.db.grad.javaapi.service;
import com.db.grad.javaapi.model.Dog;
import com.db.grad.javaapi.repository.DogsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DogService {

    private DogsRepository itsDogRepo;

    @Autowired
    public DogService(DogsRepository repo) {
        itsDogRepo = repo;
    }

    public Dog addDog(Dog theDog) {
        itsDogRepo.save(theDog);
        return theDog;
    }

    public long getNoOfDogs() {
        return itsDogRepo.count();
    }

    public Dog getDogByName(String name) {
        List<Dog> dogs = new ArrayList<Dog>();
        for (int x = 1; itsDogRepo.count() >= x; x++){
            dogs.add(itsDogRepo.findById(x));
        }
        List<Dog> dogsWithName = new ArrayList<Dog>();
        for (Dog dog : dogs){
            if(dog.getName() == name){
            dogsWithName.addAll(itsDogRepo.findByName(dog));}
        }
        if (dogsWithName.size() == 1){
            return dogsWithName.get(0);
        } else{
            return null;
        }
    }

    public Dog findDogsById(long i) {
        return itsDogRepo.findById(i);
    }
    public long updateDogDetails( Dog dog ) {
        itsDogRepo.save(dog);
        return dog.getId();
    }

    public void removeDog(long dogId) {
        Dog dog = itsDogRepo.findById(dogId);
        itsDogRepo.delete(dog);
    }

    public List<Dog> alldogs (){
        return itsDogRepo.findAll();
    }


}
