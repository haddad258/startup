const errorHandlerDetailsres = {
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

    handleSqlError: (error, res,next) => {
     
        const mappedDetails = errorHandlerDetailsres.mapSqlErrorDetails(error);
        console.log(mappedDetails);

        let status = 500; 
        let message = "Unexpected SQL error";

        switch (error.code) {
            case "ER_DUP_ENTRY":
            case "23505": 
                status = 409; 
                message = "Conflict: Duplicate entry found";
                break;

            case "ER_BAD_DB_ERROR": 
                status = 404; 
                message = "Database not found";
                break;

            case "ER_ACCESS_DENIED_ERROR": // MySQL: Access denied for user
                status = 401;
                message = "Unauthorized access to the database";
                break;

            case "23503": // PostgreSQL: Foreign key violation
                status = 400; // Bad Request
                message = "Bad request: Foreign key violation";
                break;

            case "ER_PARSE_ERROR": // MySQL: SQL syntax error
                status = 400; // Bad Request
                message = "Bad request: SQL syntax error";
                break;

            default:
                // Keep default status and message
                break;
        }
        console.log({
            message,
            details: mappedDetails,
            status,
        })
        return res.status(status).json({
            message,
            details: mappedDetails,
            status,
        });
    },
    handleBadRequest: (res, message) => {
        return res.status(400).json({
            status: 400,
            message: message || "Bad Request",
        });
    },

    handleUnauthorized: (res, message = "Unauthorized") => {
        return res.status(401).json({
            status: 401,
            message,
        });
    },

    handlePaymentRequired: (res, message = "Payment Required") => {
        return res.status(402).json({
            status: 402,
            message,
        });
    },

    handleForbidden: (res, message = "Forbidden") => {
        return res.status(403).json({
            status: 403,
            message,
        });
    },

    handleMethodNotAllowed: (res, message = "Method Not Allowed") => {
        return res.status(405).json({
            status: 405,
            message,
        });
    },

    handleNotAcceptable: (res, message = "Not Acceptable") => {
        return res.status(406).json({
            status: 406,
            message,
        });
    },

    handleRequestTimeout: (res, message = "Request Timeout") => {
        return res.status(408).json({
            status: 408,
            message,
        });
    },

    handleConflict: (res, message = "Conflict") => {
        return res.status(409).json({
            status: 409,
            message,
        });
    },

    handleGone: (res, message = "Gone") => {
        return res.status(410).json({
            status: 410,
            message,
        });
    },

    handleLengthRequired: (res, message = "Length Required") => {
        return res.status(411).json({
            status: 411,
            message,
        });
    },

    handlePreconditionFailed: (res, message = "Precondition Failed") => {
        return res.status(412).json({
            status: 412,
            message,
        });
    },

    handlePayloadTooLarge: (res, message = "Payload Too Large") => {
        return res.status(413).json({
            status: 413,
            message,
        });
    },

    handleUnsupportedMediaType: (res, message = "Unsupported Media Type") => {
        return res.status(415).json({
            status: 415,
            message,
        });
    },

    handleTooManyRequests: (res, message = "Too Many Requests") => {
        return res.status(429).json({
            status: 429,
            message,
        });
    },

    handleRequestHeaderFieldsTooLarge: (res, message = "Request Header Fields Too Large") => {
        return res.status(431).json({
            status: 431,
            message,
        });
    },

    handleCustomError: (res, status, message, data = {}) => {
        return res.status(status).json({
            status,
            message,
            data,
        });
    },


    // Additional error handling methods can be refactored similarly if needed
};

module.exports = errorHandlerDetailsres;
