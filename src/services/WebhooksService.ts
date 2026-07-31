/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsWebhooksCreateWebhookRequest } from '../models/SenviokApiEndpointsWebhooksCreateWebhookRequest';
import type { SenviokApiEndpointsWebhooksGetWebhookDeliveriesResponse } from '../models/SenviokApiEndpointsWebhooksGetWebhookDeliveriesResponse';
import type { SenviokApiEndpointsWebhooksListWebhooksResponse } from '../models/SenviokApiEndpointsWebhooksListWebhooksResponse';
import type { SenviokApiEndpointsWebhooksWebhookResponse } from '../models/SenviokApiEndpointsWebhooksWebhookResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WebhooksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsWebhooksWebhookResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsWebhooksCreateWebhookEndpoint(
        requestBody: SenviokApiEndpointsWebhooksCreateWebhookRequest,
    ): CancelablePromise<SenviokApiEndpointsWebhooksWebhookResponse> {
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
    public senviokApiEndpointsWebhooksListWebhooksEndpoint(): CancelablePromise<SenviokApiEndpointsWebhooksListWebhooksResponse> {
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
    public senviokApiEndpointsWebhooksDeleteWebhookEndpoint(
        id: string,
    ): CancelablePromise<void> {
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
    public senviokApiEndpointsWebhooksGetWebhookDeliveriesEndpoint(
        id: string,
    ): CancelablePromise<SenviokApiEndpointsWebhooksGetWebhookDeliveriesResponse> {
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
