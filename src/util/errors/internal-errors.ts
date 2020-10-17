export class InternalError extends Error {
    constructor(
        public message: string,
        protected code: number = 500,
        protected description?: string
    ) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class DatabaseError extends InternalError {
    constructor(message: string) {
        const internalMessage = 'Unexpected error when performing database operation';
        super(`${internalMessage}: ${message}`);
    }
}

export class PipedriveServiceError extends InternalError {
    constructor(message: string) {
        const internalMessage = 'The pipedrive service has errors.';
        super(`${internalMessage}: ${message}`);
    }
}

export class BlingServiceError extends InternalError {
    constructor(message: string) {
        const internalMessage = 'The bling service has errors.';
        super(`${internalMessage}: ${message}`);
    }
}

export class OrderServiceError extends InternalError {
    constructor(message: string) {
        const internalMessage = 'The orders service has errors.';
        super(`${internalMessage}: ${message}`);
    }
}