import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Mmlr5FUQGICGZoyAznabRvYmzz0mRPGZyoEJgpCQaMuUkKJI6Ii7hZjwt8az1T5UThbU6JwFmGI8ykta2aDOeEu00m2s51bP6';
  
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };
  
    return (
      <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    );
};
  
export default StripeCheckoutButton