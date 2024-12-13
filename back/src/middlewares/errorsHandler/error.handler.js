const createHttpError = require("http-errors");

const errorHandler = {
  handleBadRequest: (message) => {
    throw new createHttpError.BadRequest(message);
  },

  handleUnauthorized: (message = "Unauthorized") => {
    throw new createHttpError.Unauthorized(message);
  },

  handlePaymentRequired: (message = "Payment Required") => {
    throw new createHttpError.PaymentRequired(message);
  },

  handleForbidden: (message = "Forbidden") => {
    throw new createHttpError.Forbidden(message);
  },

  handleMethodNotAllowed: (message = "Method Not Allowed") => {
    throw new createHttpError.MethodNotAllowed(message);
  },

  handleNotAcceptable: (message = "Not Acceptable") => {
    throw new createHttpError.NotAcceptable(message);
  },

  handleRequestTimeout: (message = "Request Timeout") => {
    throw new createHttpError.RequestTimeout(message);
  },

  handleConflict: (message = "Conflict") => {
    throw new createHttpError.Conflict(message);
  },

  handleGone: (message = "Gone") => {
    throw new createHttpError.Gone(message);
  },

  handleLengthRequired: (message = "Length Required") => {
    throw new createHttpError.LengthRequired(message);
  },

  handlePreconditionFailed: (message = "Precondition Failed") => {
    throw new createHttpError.PreconditionFailed(message);
  },

  handlePayloadTooLarge: (message = "Payload Too Large") => {
    throw new createHttpError.PayloadTooLarge(message);
  },

  handleUnsupportedMediaType: (message = "Unsupported Media Type") => {
    throw new createHttpError.UnsupportedMediaType(message);
  },

  handleTooManyRequests: (message = "Too Many Requests") => {
    throw new createHttpError.UnsupportedMediaType(message);
  },

  handleRequestHeaderFieldsTooLarge: (message = "Request Header Fields Too Large") => {
    throw new createHttpError.RequestHeaderFieldsTooLarge(message);
  },

  handleCustomError: (status, message, data = {}) => {
    throw new createHttpError(status, {
      message,
      data,
    });
  },
};

module.exports = errorHandler;


// Explanation of Added Functions

//     handleUnauthorized: For 401 errors when authentication is required but has failed.
//     handleForbidden: For 403 errors when access is denied despite proper authentication.
//     handleConflict: For 409 errors, useful in scenarios like resource version conflicts.
//     handleUnprocessableEntity: For 422 errors, typically for validation failures.
//     handleServiceUnavailable: For 503 errors when a service is temporarily unavailable.
//     handleGatewayTimeout: For 504 errors indicating the server acting as a gateway timed out.

// Generic Handlers

//     handleClientError: Allows handling any client-side error by specifying a custom status code.
//     handleCustomError: Generic handler for specifying both client-side and server-side errors with more flexibility.


// handlePaymentRequired (402): For resources requiring payment.
// handleMethodNotAllowed (405): When an HTTP method is not supported by a resource.
// handleNotAcceptable (406): When the requested content format cannot be provided.
// handleRequestTimeout (408): For timeouts waiting for client requests.
// handleGone (410): For resources that are permanently unavailable.
// handleLengthRequired (411): For requests missing the Content-Length header.
// handlePreconditionFailed (412): When request preconditions (e.g., If-Match) are not met.
// handlePayloadTooLarge (413): For oversized request payloads.
// handleUnsupportedMediaType (415): For unsupported content types.
// handleTooManyRequests (429): For rate-limiting scenarios.
// handleRequestHeaderFieldsTooLarge (431): When request headers are too large.