import type { SenviokApiEndpointsSuppressionsCreateSuppressionRequest } from '../models/SenviokApiEndpointsSuppressionsCreateSuppressionRequest';
import type { SenviokApiEndpointsSuppressionsSuppressionResponse } from '../models/SenviokApiEndpointsSuppressionsSuppressionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SuppressionsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsSuppressionsSuppressionResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsSuppressionsCreateSuppressionEndpoint(requestBody: SenviokApiEndpointsSuppressionsCreateSuppressionRequest): CancelablePromise<SenviokApiEndpointsSuppressionsSuppressionResponse>;
    /**
     * @returns SenviokApiEndpointsSuppressionsSuppressionResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsSuppressionsListSuppressionsEndpoint(): CancelablePromise<Array<SenviokApiEndpointsSuppressionsSuppressionResponse>>;
    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsSuppressionsDeleteSuppressionEndpoint(id: string): CancelablePromise<void>;
}
