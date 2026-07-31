import type { SenviokApiEndpointsWaitlistJoinWaitlistRequest } from '../models/SenviokApiEndpointsWaitlistJoinWaitlistRequest';
import type { SenviokApiEndpointsWaitlistJoinWaitlistResponse } from '../models/SenviokApiEndpointsWaitlistJoinWaitlistResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class WaitlistService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param query
     * @returns SenviokApiEndpointsWaitlistJoinWaitlistResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsWaitlistGetWaitlistStatusEndpoint(query: string): CancelablePromise<SenviokApiEndpointsWaitlistJoinWaitlistResponse>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsWaitlistJoinWaitlistResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsWaitlistJoinWaitlistEndpoint(requestBody: SenviokApiEndpointsWaitlistJoinWaitlistRequest): CancelablePromise<SenviokApiEndpointsWaitlistJoinWaitlistResponse>;
}
