/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsSenderEmailsCreateSenderEmailRequest } from '../models/SenviokApiEndpointsSenderEmailsCreateSenderEmailRequest';
import type { SenviokApiEndpointsSenderEmailsListSenderEmailsResponse } from '../models/SenviokApiEndpointsSenderEmailsListSenderEmailsResponse';
import type { SenviokApiEndpointsSenderEmailsSenderEmailResponse } from '../models/SenviokApiEndpointsSenderEmailsSenderEmailResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SenderEmailsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsSenderEmailsSenderEmailResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsSenderEmailsCreateSenderEmailEndpoint(
        requestBody: SenviokApiEndpointsSenderEmailsCreateSenderEmailRequest,
    ): CancelablePromise<SenviokApiEndpointsSenderEmailsSenderEmailResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/sender-emails',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokApiEndpointsSenderEmailsListSenderEmailsResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsSenderEmailsListSenderEmailsEndpoint(): CancelablePromise<SenviokApiEndpointsSenderEmailsListSenderEmailsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/sender-emails',
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
    public senviokApiEndpointsSenderEmailsDeleteSenderEmailEndpoint(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/sender-emails/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param token
     * @returns void
     * @throws ApiError
     */
    public senviokApiEndpointsSenderEmailsVerifySenderEmailEndpoint(
        token: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/sender-emails/verify',
            query: {
                'token': token,
            },
        });
    }
}
