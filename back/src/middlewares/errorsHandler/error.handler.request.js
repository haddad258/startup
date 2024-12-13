const createHttpError = require("http-errors");

const errorHandlerRequest = {
  handleSqlSyntaxError: (message = "SQL Syntax Error", details = {}) => {
    throw new createHttpError.BadRequest({
      message,
      details,
    });
  },

  handleDuplicateKeyError: (message = "Duplicate Key Error", details = {}) => {
    throw new createHttpError.Conflict({
      message,
      details,
    });
  },

  handleForeignKeyViolation: (message = "Foreign Key Constraint Violation", details = {}) => {
    throw new createHttpError.BadRequest({
      message,
      details,
    });
  },

  handleNullConstraintViolation: (message = "Null Constraint Violation", details = {}) => {
    throw new createHttpError.BadRequest({
      message,
      details,
    });
  },

  handleTransactionError: (message = "Transaction Error", details = {}) => {
    throw new createHttpError.InternalServerError({
      message,
      details,
    });
  },

  handleDataTooLongError: (message = "Data Too Long for Column", details = {}) => {
    throw new createHttpError.BadRequest({
      message,
      details,
    });
  },

  handleInvalidColumnError: (message = "Invalid Column Name or Reference", details = {}) => {
    throw new createHttpError.BadRequest({
      message,
      details,
    });
  },

  handleDatabaseConnectionError: (message = "Database Connection Error", details = {}) => {
    throw new createHttpError.ServiceUnavailable({
      message,
      details,
    });
  },

  handleTimeoutError: (message = "Database Query Timeout", details = {}) => {
    throw new createHttpError.RequestTimeout({
      message,
      details,
    });
  },

  handleCustomSqlError: (status, message, details = {}) => {
    throw new createHttpError(status, {
      message,
      details,
    });
  },
};

module.exports = errorHandlerRequest;


