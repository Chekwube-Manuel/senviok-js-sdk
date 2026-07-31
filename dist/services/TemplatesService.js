"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesService = void 0;
class TemplatesService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsTemplatesTemplateResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsTemplatesCreateTemplateEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/templates',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokApiEndpointsTemplatesTemplateResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsTemplatesListTemplatesEndpoint() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/templates',
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
    senviokApiEndpointsTemplatesDeleteTemplateEndpoint(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/templates/{id}',
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
     * @param id
     * @returns SenviokApiEndpointsTemplatesTemplateResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsTemplatesGetTemplateEndpoint(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/templates/{id}',
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
     * @param id
     * @param requestBody
     * @returns SenviokApiEndpointsTemplatesTemplateResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsTemplatesUpdateTemplateEndpoint(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/templates/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.TemplatesService = TemplatesService;
