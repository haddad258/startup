function handlePayPalError(error) {
    if (error.statusCode) {
      console.error('PayPal API Error:', error);
      switch (error.statusCode) {
        case 400:
          return { message: 'Bad Request - Check input parameters', code: error.statusCode };
        case 401:
          return { message: 'Unauthorized - Check API credentials', code: error.statusCode };
        case 403:
          return { message: 'Forbidden - Action not allowed', code: error.statusCode };
        case 404:
          return { message: 'Resource not found', code: error.statusCode };
        case 500:
          return { message: 'Internal Server Error - Try again later', code: error.statusCode };
        default:
          return { message: `Unhandled error: ${error.message}`, code: error.statusCode };
      }
    } else if (error.message) {
      console.error('Error:', error.message);
      return { message: error.message, code: 'Unknown' };
    }
    return { message: 'An unknown error occurred', code: 'Unknown' };
  }

//   https://developer.paypal.com/tools/sandbox/error-conditions/
//   ///////////////////////////
//   example 
//   async function createOrder() {
//     const request = new paypal.orders.OrdersCreateRequest();
//     request.requestBody({
//       intent: 'CAPTURE',
//       purchase_units: [
//         {
//           amount: {
//             currency_code: 'USD',
//             value: '100.00',
//           },
//         },
//       ],
//     });
  
//     try {
//       const response = await client.execute(request);
//       console.log('Order Created:', response.result.id);
//       return response.result;
//     } catch (error) {
//       const handledError = handlePayPalError(error);
//       console.error(handledError);
//       throw handledError;
//     }
//   }
  
//   async function captureOrder(orderId) {
//     const request = new paypal.orders.OrdersCaptureRequest(orderId);
//     request.requestBody({});
  
//     try {
//       const response = await client.execute(request);
//       console.log('Order Captured:', response.result.id);
//       return response.result;
//     } catch (error) {
//       const handledError = handlePayPalError(error);
//       console.error(handledError);
//       throw handledError;
//     }
//   }
  
//   (async () => {
//     try {
//       const order = await createOrder();
//       await captureOrder(order.id);
//     } catch (error) {
//       console.error('Error during PayPal operation:', error.message);
//     }
//   })();