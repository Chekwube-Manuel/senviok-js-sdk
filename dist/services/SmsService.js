"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
class SmsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsSmsSendSmsResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsSmsSendSmsEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/sms',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.SmsService = SmsService;
