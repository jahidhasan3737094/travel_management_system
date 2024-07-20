package com.Travel_The_World.service.admin_service;

import com.Travel_The_World.model.TouristUserQuery;
import com.Travel_The_World.repository.TouristUserQueryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TouristUserQueryService {

    @Autowired
    private TouristUserQueryRepository touristUserQueryRepository;

    public TouristUserQuery saveQuery(TouristUserQuery query) {
        return touristUserQueryRepository.save(query);
    }

    public List<TouristUserQuery> getAllQueries() {
        return touristUserQueryRepository.findAll();
    }

    public TouristUserQuery getQueryById(Long id) {
        return touristUserQueryRepository.findById(id).orElse(null);
    }

    public void deleteQuery(Long id) {
        touristUserQueryRepository.deleteById(id);
    }
}
