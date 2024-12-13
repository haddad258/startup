// Mapping des codes de réponse et des actions
const responseActions = {
    "01": {
      reason: "Expired Card Account upgrade, or Portfolio Sale Conversion.",
      action: "Obtain new account information before next billing cycle.",
    },
    "02": {
      reason: "Over Credit Limit, or insufficient funds.",
      action: "Retry the transaction 72 hours later.",
    },
    "03": {
      reason: "Account Closed Fraudulent.",
      action: "Obtain another type of payment from customer.",
    },
    "21": {
      reason:
        "Card holder has been unsuccessful at canceling recurring payment through merchant.",
      action: "Stop recurring payment requests.",
    },
  };
  
  function handleMasterCardResponse(responseCode) {
    const response = responseActions[responseCode];
  
    if (response) {
      console.log(`Code: ${responseCode}`);
      console.log(`Reason: ${response.reason}`);
      console.log(`Suggested Action: ${response.action}`);
      return response.action;
    } else {
      console.log("Code inconnu. Veuillez consulter la documentation.");
      return "Aucune action recommandée disponible.";
    }
  }
  
  const responseCode = "02"; 
  const action = handleMasterCardResponse(responseCode);
  
  console.log(`Action à entreprendre : ${action}`);
  // source https://developer.paypal.com/api/nvp-soap/AVSResponseCodes/#avs-error-response-codes
  