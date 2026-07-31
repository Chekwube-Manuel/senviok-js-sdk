import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class UnsubscribeService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param token
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsSuppressionsPublicUnsubscribeEndpoint(token: string): CancelablePromise<void>;
}
