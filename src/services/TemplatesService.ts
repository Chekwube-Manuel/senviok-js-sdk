/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsTemplatesCreateTemplateRequest } from '../models/SenviokApiEndpointsTemplatesCreateTemplateRequest';
import type { SenviokApiEndpointsTemplatesTemplateResponse } from '../models/SenviokApiEndpointsTemplatesTemplateResponse';
import type { SenviokApiEndpointsTemplatesUpdateTemplateRequest } from '../models/SenviokApiEndpointsTemplatesUpdateTemplateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TemplatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsTemplatesTemplateResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsTemplatesCreateTemplateEndpoint(
        requestBody: SenviokApiEndpointsTemplatesCreateTemplateRequest,
    ): CancelablePromise<SenviokApiEndpointsTemplatesTemplateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/templates',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokApiEndpointsTemplatesTemplateResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsTemplatesListTemplatesEndpoint(): CancelablePromise<Array<SenviokApiEndpointsTemplatesTemplateResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/templates',
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
    public senviokApiEndpointsTemplatesDeleteTemplateEndpoint(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/templates/{id}',
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
     * @param id
     * @returns SenviokApiEndpointsTemplatesTemplateResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsTemplatesGetTemplateEndpoint(
        id: string,
    ): CancelablePromise<SenviokApiEndpointsTemplatesTemplateResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/templates/{id}',
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
     * @param id
     * @param requestBody
     * @returns SenviokApiEndpointsTemplatesTemplateResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsTemplatesUpdateTemplateEndpoint(
        id: string,
        requestBody: SenviokApiEndpointsTemplatesUpdateTemplateRequest,
    ): CancelablePromise<SenviokApiEndpointsTemplatesTemplateResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/templates/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
