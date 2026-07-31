import type { SenviokApiEndpointsSenderEmailsCreateSenderEmailRequest } from '../models/SenviokApiEndpointsSenderEmailsCreateSenderEmailRequest';
import type { SenviokApiEndpointsSenderEmailsListSenderEmailsResponse } from '../models/SenviokApiEndpointsSenderEmailsListSenderEmailsResponse';
import type { SenviokApiEndpointsSenderEmailsSenderEmailResponse } from '../models/SenviokApiEndpointsSenderEmailsSenderEmailResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SenderEmailsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsSenderEmailsSenderEmailResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsSenderEmailsCreateSenderEmailEndpoint(requestBody: SenviokApiEndpointsSenderEmailsCreateSenderEmailRequest): CancelablePromise<SenviokApiEndpointsSenderEmailsSenderEmailResponse>;
    /**
     * @returns SenviokApiEndpointsSenderEmailsListSenderEmailsResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsSenderEmailsListSenderEmailsEndpoint(): CancelablePromise<SenviokApiEndpointsSenderEmailsListSenderEmailsResponse>;
    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsSenderEmailsDeleteSenderEmailEndpoint(id: string): CancelablePromise<void>;
    /**
     * @param token
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsSenderEmailsVerifySenderEmailEndpoint(token: string): CancelablePromise<void>;
}
