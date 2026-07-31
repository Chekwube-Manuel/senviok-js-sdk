import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class V1Service {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsWebhooksAwsSesWebhookEndpoint(): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsWebhooksTermiiWebhookEndpoint(): CancelablePromise<void>;
}
