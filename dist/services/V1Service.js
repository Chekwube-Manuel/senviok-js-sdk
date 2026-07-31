"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Service = void 0;
class V1Service {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsWebhooksAwsSesWebhookEndpoint() {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/v1/webhooks/aws-ses',
        });
    }
    /**
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsWebhooksTermiiWebhookEndpoint() {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/v1/webhooks/termii',
        });
    }
}
exports.V1Service = V1Service;
