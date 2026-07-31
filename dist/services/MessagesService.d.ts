import type { SenviokApiEndpointsMessagesMessageRequest } from '../models/SenviokApiEndpointsMessagesMessageRequest';
import type { SenviokApiEndpointsMessagesMessageResponse } from '../models/SenviokApiEndpointsMessagesMessageResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class MessagesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsMessagesMessageResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsMessagesSendMessageEndpoint(requestBody: SenviokApiEndpointsMessagesMessageRequest): CancelablePromise<SenviokApiEndpointsMessagesMessageResponse>;
}
