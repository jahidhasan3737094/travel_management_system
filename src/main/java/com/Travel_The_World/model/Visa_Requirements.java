package com.Travel_The_World.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Visa_Requirements {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer visaId;//visa_id (primary key): Unique identifier for each visa requirement.
    @ManyToOne
    @JoinColumn(name="destination_id",nullable = true)
    private Destinations destination_id;//destination_id (foreign key):
    // References the destination_id from the Destinations table.
    private String visaType;//visa_type (e.g., tourist, business): Type of visa required.
    private String requirements;//requirements: Text description of visa application requirements.
    private String applicationProcess;//application_process: Detailed explanation of the visa application process.
}
