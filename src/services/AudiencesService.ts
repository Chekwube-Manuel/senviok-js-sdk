/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsAudiencesAudienceResponse } from '../models/SenviokApiEndpointsAudiencesAudienceResponse';
import type { SenviokApiEndpointsAudiencesCreateAudienceRequest } from '../models/SenviokApiEndpointsAudiencesCreateAudienceRequest';
import type { SenviokApiEndpointsAudiencesListAudiencesResponse } from '../models/SenviokApiEndpointsAudiencesListAudiencesResponse';
import type { SenviokApiEndpointsContactsContactResponse } from '../models/SenviokApiEndpointsContactsContactResponse';
import type { SenviokApiEndpointsContactsCreateContactRequest } from '../models/SenviokApiEndpointsContactsCreateContactRequest';
import type { SenviokApiEndpointsContactsListContactsResponse } from '../models/SenviokApiEndpointsContactsListContactsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AudiencesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param audienceId
     * @param requestBody
     * @returns SenviokApiEndpointsContactsContactResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsContactsCreateContactEndpoint(
        audienceId: string,
        requestBody: SenviokApiEndpointsContactsCreateContactRequest,
    ): CancelablePromise<SenviokApiEndpointsContactsContactResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/audiences/{audienceId}/contacts',
            path: {
                'audienceId': audienceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param audienceId
     * @returns SenviokApiEndpointsContactsListContactsResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsContactsListContactsEndpoint(
        audienceId: string,
    ): CancelablePromise<SenviokApiEndpointsContactsListContactsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/audiences/{audienceId}/contacts',
            path: {
                'audienceId': audienceId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param audienceId
     * @param id
     * @returns void
     * @throws ApiError
     */
    public senviokApiEndpointsContactsDeleteContactEndpoint(
        audienceId: string,
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/audiences/{audienceId}/contacts/{id}',
            path: {
                'audienceId': audienceId,
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAudiencesAudienceResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsAudiencesCreateAudienceEndpoint(
        requestBody: SenviokApiEndpointsAudiencesCreateAudienceRequest,
    ): CancelablePromise<SenviokApiEndpointsAudiencesAudienceResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/audiences',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokApiEndpointsAudiencesListAudiencesResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsAudiencesListAudiencesEndpoint(): CancelablePromise<SenviokApiEndpointsAudiencesListAudiencesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/audiences',
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
    public senviokApiEndpointsAudiencesDeleteAudienceEndpoint(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/audiences/{id}',
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
