const axios = require('axios');

axios.post('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
    "intent": "CAPTURE",
    "purchase_units": [{
        "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b",
        "amount": {
            "currency_code": "USD",
            "value": "100.00"
        }
    }],
    "payment_source": {
        "paypal": {
            "experience_context": {
                "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
                "brand_name": "EXAMPLE INC",
                "locale": "en-US",
                "landing_page": "LOGIN",
                "shipping_preference": "SET_PROVIDED_ADDRESS",
                "user_action": "PAY_NOW",
                "return_url": "https://example.com/returnUrl",
                "cancel_url": "https://example.com/cancelUrl"
            }
        }
    }
}, {
    headers: {
        'Content-Type': 'application/json',
        'PayPal-Request-Id': 'AfJfADCwKHeU4zX33VpsWl-6ss7_8Splslme3qucCLwOjyaDc01pqZN5lPqicJCNB_nnDeH1l8ZmgHBC',
        'Authorization': 'Bearer ECV-7qv2BH6PdyY3MGyfX6or5pSK8YkrE725erT8lAdW8ujB1FEAXR6g1CY-jmzxSqSWhf3J9Wuduow-'
    }
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error.response.data);
});
