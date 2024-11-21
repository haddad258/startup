const paypal = require('@paypal/checkout-server-sdk');
const { client } = require('./paypalConfig');

// Create an order (payment request)
async function createOrder(req, res) {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [
            {
                amount: {
                    currency_code: 'USD',
                    value: '100.00', // Example amount
                },
            },
        ],
    });

    try {
        console.log("req.params",req.body)
        const order = await client().execute(request);
        console.log("order",order.result.id)
        // Extract the approval URL from the response
        const approvalUrl = order.result.links.find(link => link.rel === 'approve').href;
         console.log(approvalUrl)
        // Send the order ID and approval URL to the frontend
        res.json({
            orderId: order.result.id,
            approvalUrl: approvalUrl,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating order');
    }
}

async function captureOrder(req, res) {
    const orderID = req.params.id;
    console.log("orderID")
    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    try {
        const capture = await client().execute(request);
        console.log(capture)
        res.json({
            status: capture.result.status,
            captureDetails: capture.result,
        });
    } catch (error) {
        console.error("Capture order failed:", error.response);

        // Return error response details to the frontend for debugging
        res.status(500).json({
            message: 'Error capturing order',
            debugId: error.response?.debug_id, // PayPal debug ID for tracking
            details: error.response?.details || 'No further details available',
            link: error.response?.links?.[0]?.href || '',
        });
    }
}

async function newfunct(req, res) {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [
            {
                amount: {
                    currency_code: 'USD',
                    value: '100.00',
                },
            },
        ],
        // Add a payment source (example for simplicity, replace with actual payment_source if needed)
        payment_source: {
            paypal: {
                experience_context: {
                    payment_method_preference: 'IMMEDIATE_PAYMENT_REQUIRED',
                    user_action: 'PAY_NOW',
                    return_url: 'http://localhost:8009/api/accounts/paypals/transactions/return',  // Replace with your return URL
                    cancel_url: 'http://localhost:8009/api/accounts/paypals/transactions/cancel'   // Replace with your cancel URL
                }
            }
        }
    });

    try {
        // Step 1: Create the order
        const order = await client().execute(request);

        // If immediate capture is possible, attempt to capture the order immediately
        const captureRequest = new paypal.orders.OrdersCaptureRequest(order.result.id);
        const capture = await client().execute(captureRequest);

        // Respond with capture details
        res.json({
            status: capture.result.status,
            captureDetails: capture.result,
        });
    } catch (error) {
        console.error("Error during order creation or capture:", error);
        res.status(500).json({
            message: 'Error capturing order',
            details: error.message || 'No further details available',
        });
    }
}

module.exports = {
    createOrder,
    captureOrder,
    newfunct
};
