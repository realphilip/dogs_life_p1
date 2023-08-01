package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Dog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DogsRepository extends JpaRepository<Dog, Long> {
    boolean existsById( long id );
  Dog  findById( long id );
    List<Dog> findByName(Dog theDog );



    // clash long save(Dog theDog );
    /*

    List<Dog> findByName(Dog theDog );

    // clash  boolean delete( Dog theDog );
    long count();
    boolean existsById( long id );

    // Additional admin functionality
    void    deleteAll();*/
}
