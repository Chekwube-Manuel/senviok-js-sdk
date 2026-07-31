/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsWaitlistJoinWaitlistRequest } from '../models/SenviokApiEndpointsWaitlistJoinWaitlistRequest';
import type { SenviokApiEndpointsWaitlistJoinWaitlistResponse } from '../models/SenviokApiEndpointsWaitlistJoinWaitlistResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WaitlistService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param query
     * @returns SenviokApiEndpointsWaitlistJoinWaitlistResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsWaitlistGetWaitlistStatusEndpoint(
        query: string,
    ): CancelablePromise<SenviokApiEndpointsWaitlistJoinWaitlistResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/waitlist/status',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsWaitlistJoinWaitlistResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsWaitlistJoinWaitlistEndpoint(
        requestBody: SenviokApiEndpointsWaitlistJoinWaitlistRequest,
    ): CancelablePromise<SenviokApiEndpointsWaitlistJoinWaitlistResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/waitlist/join',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
