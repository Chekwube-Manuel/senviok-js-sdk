/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsSuppressionsCreateSuppressionRequest } from '../models/SenviokApiEndpointsSuppressionsCreateSuppressionRequest';
import type { SenviokApiEndpointsSuppressionsSuppressionResponse } from '../models/SenviokApiEndpointsSuppressionsSuppressionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SuppressionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsSuppressionsSuppressionResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsSuppressionsCreateSuppressionEndpoint(
        requestBody: SenviokApiEndpointsSuppressionsCreateSuppressionRequest,
    ): CancelablePromise<SenviokApiEndpointsSuppressionsSuppressionResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/suppressions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokApiEndpointsSuppressionsSuppressionResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsSuppressionsListSuppressionsEndpoint(): CancelablePromise<Array<SenviokApiEndpointsSuppressionsSuppressionResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/suppressions',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public senviokApiEndpointsSuppressionsDeleteSuppressionEndpoint(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/suppressions/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
