"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpService = void 0;
class OtpService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsOtpSendOtpResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsOtpSendOtpEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/otp/send',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsOtpVerifyOtpResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsOtpVerifyOtpEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/otp/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.OtpService = OtpService;
