import { React } from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publisharebleKey = 'pk_test_51IFl2yHPJfHkQcsQLJ7NX7RSxYaemsa4huuTFe4ALpILLfENgtikQpGKHScIbQUpO49m4mZXT2lShi6yAWc47nNW00lGkLnrOY'
    const onToken = token => {
        console.log(token)
        alert("Payment Succesfull")
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is ${price} `}
            amount={priceForStripe}
            panelLabel='PAY NOW'
            token={onToken}
            stripeKey={publisharebleKey}
        />
    )

}

export default StripCheckoutButton;