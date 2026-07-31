"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultService = void 0;
class DefaultService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any
     * @throws ApiError
     */
    getHealth() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/health',
        });
    }
}
exports.DefaultService = DefaultService;
