import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Mmlr5FUQGICGZoyAznabRvYmzz0mRPGZyoEJgpCQaMuUkKJI6Ii7hZjwt8az1T5UThbU6JwFmGI8ykta2aDOeEu00m2s51bP6';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful');
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN clothing ltd.'
            billingAddress
            shippingAddress
            image = "https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = "Pay Now"
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton