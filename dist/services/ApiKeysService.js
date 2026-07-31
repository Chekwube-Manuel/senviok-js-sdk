"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeysService = void 0;
class ApiKeysService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsApiKeysCreateApiKeyResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsApiKeysCreateApiKeyEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/api-keys',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokApiEndpointsApiKeysListApiKeysResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsApiKeysListApiKeysEndpoint() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/api-keys',
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
    senviokApiEndpointsApiKeysDeleteApiKeyEndpoint(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/api-keys/{id}',
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
exports.ApiKeysService = ApiKeysService;
