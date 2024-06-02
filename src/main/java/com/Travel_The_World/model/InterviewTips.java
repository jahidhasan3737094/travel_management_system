package com.Travel_The_World.model;

import jakarta.persistence.*;

@Entity
public class InterviewTips {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer interview_id;// (primary key): Unique identifier for each interview tip.

    @ManyToOne
    @JoinColumn(name="destination_id",nullable = true)
    private Destinations destination_id;
    // References the destination_id from the Destinations table.
    private String visaType;//visa_type (e.g., tourist, business): Type of visa the tip applies to.
    private String tipDescription;//tip_description: Specific advice for the visa interview.



}
