import React, { useState } from 'react';

const BookingForm = ({ eventType }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', eventDetails: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Booking Form for {eventType}</h2>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            {eventType === 'Wedding' && <input type="text" name="eventDetails" placeholder="Wedding Details" onChange={handleChange} />}
            {eventType === 'Corporate' && <input type="text" name="eventDetails" placeholder="Corporate Details" onChange={handleChange} />}
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;
