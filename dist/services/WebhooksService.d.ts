import type { SenviokApiEndpointsWebhooksCreateWebhookRequest } from '../models/SenviokApiEndpointsWebhooksCreateWebhookRequest';
import type { SenviokApiEndpointsWebhooksGetWebhookDeliveriesResponse } from '../models/SenviokApiEndpointsWebhooksGetWebhookDeliveriesResponse';
import type { SenviokApiEndpointsWebhooksListWebhooksResponse } from '../models/SenviokApiEndpointsWebhooksListWebhooksResponse';
import type { SenviokApiEndpointsWebhooksWebhookResponse } from '../models/SenviokApiEndpointsWebhooksWebhookResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class WebhooksService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsWebhooksWebhookResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsWebhooksCreateWebhookEndpoint(requestBody: SenviokApiEndpointsWebhooksCreateWebhookRequest): CancelablePromise<SenviokApiEndpointsWebhooksWebhookResponse>;
    /**
     * @returns SenviokApiEndpointsWebhooksListWebhooksResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsWebhooksListWebhooksEndpoint(): CancelablePromise<SenviokApiEndpointsWebhooksListWebhooksResponse>;
    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsWebhooksDeleteWebhookEndpoint(id: string): CancelablePromise<void>;
    /**
     * @param id
     * @returns SenviokApiEndpointsWebhooksGetWebhookDeliveriesResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsWebhooksGetWebhookDeliveriesEndpoint(id: string): CancelablePromise<SenviokApiEndpointsWebhooksGetWebhookDeliveriesResponse>;
}
