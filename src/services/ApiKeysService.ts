/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsApiKeysCreateApiKeyRequest } from '../models/SenviokApiEndpointsApiKeysCreateApiKeyRequest';
import type { SenviokApiEndpointsApiKeysCreateApiKeyResponse } from '../models/SenviokApiEndpointsApiKeysCreateApiKeyResponse';
import type { SenviokApiEndpointsApiKeysListApiKeysResponse } from '../models/SenviokApiEndpointsApiKeysListApiKeysResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApiKeysService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsApiKeysCreateApiKeyResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsApiKeysCreateApiKeyEndpoint(
        requestBody: SenviokApiEndpointsApiKeysCreateApiKeyRequest,
    ): CancelablePromise<SenviokApiEndpointsApiKeysCreateApiKeyResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/api-keys',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokApiEndpointsApiKeysListApiKeysResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsApiKeysListApiKeysEndpoint(): CancelablePromise<SenviokApiEndpointsApiKeysListApiKeysResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/api-keys',
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
    public senviokApiEndpointsApiKeysDeleteApiKeyEndpoint(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/api-keys/{id}',
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
