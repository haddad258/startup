const createHttpError = require("http-errors");

const errorHandler = {
  /**
   * Handle a bad request (400)
   * @param {string} message - Error message
   * @param {object} [data] - Additional data related to the error
   */
  handleBadRequest: (message, data = null) => {
    throw createHttpError(400, {
      message,
      status: 400,
      ...(data && { data }),
    });
  },

  /**
   * Handle an internal server error (500)
   * @param {string} message - Error message
   * @param {object} [data] - Additional data related to the error
   */
  handleInternalServerError: (message, data = null) => {
    throw createHttpError(500, {
      message,
      status: 500,
      ...(data && { data }),
    });
  },

  /**
   * Handle a resource not found error (404)
   * @param {string} message - Error message
   * @param {object} [data] - Additional data related to the error
   */
  handleNotFound: (message, data = null) => {
    throw createHttpError(404, {
      message,
      status: 404,
      ...(data && { data }),
    });
  },

  /**
   * Handle a client error with a custom status code
   * @param {string} message - Error message
   * @param {number} status - HTTP status code
   * @param {object} [data] - Additional data related to the error
   */
  handleClientError: (message, status, data = null) => {
    if (status < 400 || status >= 500) {
      throw new Error("Client error status code must be between 400 and 499.");
    }
    throw createHttpError(status, {
      message,
      status,
      ...(data && { data }),
    });
  },
};

module.exports = errorHandler;

//////////////////////for test//////////////////

// try {
//   errorHandler.handleBadRequest("Invalid input data.", { field: "email" });
// } catch (error) {
//   console.error(error);
// }


// try {
//   errorHandler.handleInternalServerError("Database connection failed.");
// } catch (error) {
//   console.error(error);
// }
