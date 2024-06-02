package com.Travel_The_World.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Bookings {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer bookingId; //booking_id (primary key): Unique identifier for each booking.
    @OneToOne // Owning side of the relationship (optional but recommended)
    @JoinColumn(name="userId",nullable = false)
    private User userId;//user_id (foreign key): References the user_id from the Users table.
    // Add methods to set/get the user
    @OneToOne
    @JoinColumn(name="destination_id",nullable = true)
    private Destinations destinationId;//destination_id (foreign key): References the destination_id from the Destinations table.
    private String bookingType;//booking_type (e.g., 'flight', 'bus', 'train'): Type of travel booked.
    private Date travelDate;//travel_date: Date of travel.
    private String confirmation_code;//confirmation_code: Confirmation code for the booking (obtained from booking API).
    private String price;//price: Price paid for the booking.
}
