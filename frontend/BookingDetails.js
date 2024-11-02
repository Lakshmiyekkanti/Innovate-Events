import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const BookingForm = () => {
    const history = useHistory();
    const [bookingData, setBookingData] = useState({}); // Define your booking data state

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Here you would handle the booking logic (API call, validation, etc.)
        // For example:
        const response = await submitBooking(bookingData); // Your function to submit booking
        if (response.success) {
            // After booking is successful, navigate to Booking Details page
            history.push({
                pathname: '/booking-details',
                state: { bookingData }, // Pass booking data to the BookingDetails page
            });
        } else {
            // Handle error
            console.error('Booking failed', response.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Your form fields for booking */}
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;
