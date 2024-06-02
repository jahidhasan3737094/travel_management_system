package com.Travel_The_World.model;

import jakarta.persistence.*;

import java.util.Date;

public class Payments {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer paymentId;//payment_id (primary key): Unique identifier for each payment.
    @OneToOne
    @JoinColumn(name="bookings")
    private Bookings bookingId;//booking_id (foreign key): References the booking_id from the Bookings table.
    private long amount; //amount: Payment amount.
    private String payment_method;//payment_method: Method used for payment (e.g., 'credit card', 'paypal').
    private Date paymentDate;//payment_date: Date of payment.
    private String transactionId;//transaction_id: Unique transaction ID from the payment gateway.

}
