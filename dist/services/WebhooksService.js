"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksService = void 0;
class WebhooksService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsWebhooksWebhookResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsWebhooksCreateWebhookEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/webhooks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokApiEndpointsWebhooksListWebhooksResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsWebhooksListWebhooksEndpoint() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/webhooks',
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
    senviokApiEndpointsWebhooksDeleteWebhookEndpoint(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/webhooks/{id}',
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
     * @returns SenviokApiEndpointsWebhooksGetWebhookDeliveriesResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsWebhooksGetWebhookDeliveriesEndpoint(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/webhooks/{id}/deliveries',
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
exports.WebhooksService = WebhooksService;
