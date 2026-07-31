"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppressionsService = void 0;
class SuppressionsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsSuppressionsSuppressionResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsSuppressionsCreateSuppressionEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/suppressions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokApiEndpointsSuppressionsSuppressionResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsSuppressionsListSuppressionsEndpoint() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/suppressions',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsSuppressionsDeleteSuppressionEndpoint(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/suppressions/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.SuppressionsService = SuppressionsService;
