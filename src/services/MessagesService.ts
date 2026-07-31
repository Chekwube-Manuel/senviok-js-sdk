/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsMessagesMessageRequest } from '../models/SenviokApiEndpointsMessagesMessageRequest';
import type { SenviokApiEndpointsMessagesMessageResponse } from '../models/SenviokApiEndpointsMessagesMessageResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MessagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsMessagesMessageResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsMessagesSendMessageEndpoint(
        requestBody: SenviokApiEndpointsMessagesMessageRequest,
    ): CancelablePromise<SenviokApiEndpointsMessagesMessageResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/messages',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
