"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitlistService = void 0;
class WaitlistService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param query
     * @returns SenviokApiEndpointsWaitlistJoinWaitlistResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsWaitlistGetWaitlistStatusEndpoint(query) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/waitlist/status',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsWaitlistJoinWaitlistResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsWaitlistJoinWaitlistEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/waitlist/join',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
exports.WaitlistService = WaitlistService;
