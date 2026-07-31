/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsDomainsCreateDomainRequest } from '../models/SenviokApiEndpointsDomainsCreateDomainRequest';
import type { SenviokApiEndpointsDomainsDomainResponse } from '../models/SenviokApiEndpointsDomainsDomainResponse';
import type { SenviokApiEndpointsDomainsGetDomainDkimResponse } from '../models/SenviokApiEndpointsDomainsGetDomainDkimResponse';
import type { SenviokApiEndpointsDomainsListDomainsResponse } from '../models/SenviokApiEndpointsDomainsListDomainsResponse';
import type { SenviokApiEndpointsDomainsVerifyDomainResponse } from '../models/SenviokApiEndpointsDomainsVerifyDomainResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DomainsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsDomainsDomainResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsDomainsCreateDomainEndpoint(
        requestBody: SenviokApiEndpointsDomainsCreateDomainRequest,
    ): CancelablePromise<SenviokApiEndpointsDomainsDomainResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/domains',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokApiEndpointsDomainsListDomainsResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsDomainsListDomainsEndpoint(): CancelablePromise<SenviokApiEndpointsDomainsListDomainsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/domains',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param id
     * @returns SenviokApiEndpointsDomainsGetDomainDkimResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsDomainsGetDomainDkimEndpoint(
        id: string,
    ): CancelablePromise<SenviokApiEndpointsDomainsGetDomainDkimResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/domains/{id}/dkim',
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
     * @returns SenviokApiEndpointsDomainsVerifyDomainResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsDomainsVerifyDomainEndpoint(
        id: string,
    ): CancelablePromise<SenviokApiEndpointsDomainsVerifyDomainResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/domains/{id}/verify',
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
