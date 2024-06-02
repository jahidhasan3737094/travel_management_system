package com.Travel_The_World.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Destinations {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Integer destination_Id;//destination_id (primary key): Unique identifier for each destination.
    private String name;//name: Name of the destination city or region.
    private String country;//country: Country where the destination is located.
    private String description;//description: Detailed description of the destination.
    private String imageUrl;//image_url: URL for an image of the destination.
    @OneToMany(mappedBy = "destination_id",cascade = CascadeType.ALL,orphanRemoval = true) // mappedBy refers to the field in both classes referencing Destination
    private List<Visa_Requirements> visaRequirements=new ArrayList<>();
    @OneToMany(mappedBy = "destination_id",cascade = CascadeType.ALL,orphanRemoval = true) // mappedBy refers to the field in Interview_Tips referencing Destination
    private List<InterviewTips> interviewTips=new ArrayList<>();
    // Add methods to add/remove visa requirements and interview tips from the lists

    // Add methods to add/remove visa requirements
    public void addVisaRequirement(Visa_Requirements visaRequirement) {
        visaRequirements.add(visaRequirement);
        visaRequirement.setDestination_id(this);
    }

    public void removeVisaRequirement(Visa_Requirements visaRequirement) {
        visaRequirements.remove(visaRequirement);
        visaRequirement.setDestination_id(null);
    }

}
