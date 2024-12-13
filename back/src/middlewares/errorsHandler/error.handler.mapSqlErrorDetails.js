const createHttpError = require("http-errors");

const errorHandlerSqlDetails = {
  mapSqlErrorDetails: (error) => {
    const errorKeys = [
      'length', 'name', 'severity', 'code', 'detail', 'hint', 
      'position', 'internalPosition', 'internalQuery', 'where', 
      'schema', 'table', 'column', 'dataType', 'constraint', 
      'file', 'line', 'routine'
    ];

    const mappedDetails = errorKeys.reduce((details, key) => {
      if (error[key]) {
        details[key] = error[key];
      }
      return details;
    }, {});

    return mappedDetails;
  },

  handleSqlError: (error, res, next) => {
    console.log(error);
    console.log(error.message);
    const mappedDetails = errorHandlerSqlDetails.mapSqlErrorDetails(error);
    console.log(mappedDetails);

    // Handle specific SQL error codes and map them to appropriate HTTP errors
    switch (error.code) {
      case "ER_DUP_ENTRY": // MySQL: Duplicate key error
      case "23505": // PostgreSQL: Unique constraint violation
        return next(
          createHttpError.Conflict(JSON.stringify({
            message: "Conflict: Duplicate entry found",
            details: mappedDetails,
          }))
        );

      case "ER_BAD_DB_ERROR": // MySQL: Unknown database
        return next(
          createHttpError.NotFound(JSON.stringify({
            message: "Database not found",
            details: mappedDetails,
          }))
        );

      case "ER_ACCESS_DENIED_ERROR": // MySQL: Access denied for user
        return next(
          createHttpError.Unauthorized(JSON.stringify({
            message: "Unauthorized access to the database",
            details: mappedDetails,
          }))
        );

      case "23503": // PostgreSQL: Foreign key violation
        return next(
          createHttpError.BadRequest(JSON.stringify({
            message: "Bad request: Foreign key violation",
            details: mappedDetails,
          }))
        );

      case "ER_PARSE_ERROR": // MySQL: SQL syntax error
        return next(
          createHttpError.BadRequest(JSON.stringify({
            message: "Bad request: SQL syntax error",
            details: mappedDetails,
          }))
        );

      default:
        return next(
          createHttpError.InternalServerError(JSON.stringify({
            message: "Unexpected SQL error",
            details: mappedDetails,
          }))
        );
    }
  },

  // Additional error handling methods
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
    throw new createHttpError.TooManyRequests(message);
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

module.exports = errorHandlerSqlDetails;
