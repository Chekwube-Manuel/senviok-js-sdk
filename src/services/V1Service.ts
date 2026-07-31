/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class V1Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns void
     * @throws ApiError
     */
    public senviokApiEndpointsWebhooksAwsSesWebhookEndpoint(): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/v1/webhooks/aws-ses',
        });
    }
    /**
     * @returns void
     * @throws ApiError
     */
    public senviokApiEndpointsWebhooksTermiiWebhookEndpoint(): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/v1/webhooks/termii',
        });
    }
}
