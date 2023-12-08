class ApiError {
    constructor(status, message, error, method) {
        this.status = status;
        this.message = message;
        this.error = error;
        this.method = method;
    }
}

export { ApiError };