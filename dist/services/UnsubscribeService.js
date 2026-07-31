"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsubscribeService = void 0;
class UnsubscribeService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param token
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsSuppressionsPublicUnsubscribeEndpoint(token) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/unsubscribe',
            query: {
                'token': token,
            },
        });
    }
}
exports.UnsubscribeService = UnsubscribeService;
