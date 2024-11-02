import React from 'react';
import { PayPalButton } from "react-paypal-button";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleStripePayment = async (event) => {
        event.preventDefault();
        const cardElement = elements.getElement(CardElement);

        // Handle Stripe payment here
    };

    const handlePayPalPayment = (details, data) => {
        // Handle PayPal payment confirmation here
    };

    return (
        <div>
            <h2>Payment Options</h2>
            <form onSubmit={handleStripePayment}>
                <CardElement />
                <button type="submit">Pay with Stripe</button>
            </form>
            <PayPalButton
                amount="0.01" // Set amount here
                onSuccess={handlePayPalPayment}
            />
        </div>
    );
};

export default PaymentForm;
