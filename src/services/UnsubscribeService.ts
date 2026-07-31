/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UnsubscribeService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param token
     * @returns void
     * @throws ApiError
     */
    public senviokApiEndpointsSuppressionsPublicUnsubscribeEndpoint(
        token: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/unsubscribe',
            query: {
                'token': token,
            },
        });
    }
}
