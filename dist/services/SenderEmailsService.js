"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenderEmailsService = void 0;
class SenderEmailsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsSenderEmailsSenderEmailResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsSenderEmailsCreateSenderEmailEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/sender-emails',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokApiEndpointsSenderEmailsListSenderEmailsResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsSenderEmailsListSenderEmailsEndpoint() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/sender-emails',
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
    senviokApiEndpointsSenderEmailsDeleteSenderEmailEndpoint(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/sender-emails/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param token
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsSenderEmailsVerifySenderEmailEndpoint(token) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/sender-emails/verify',
            query: {
                'token': token,
            },
        });
    }
}
exports.SenderEmailsService = SenderEmailsService;
