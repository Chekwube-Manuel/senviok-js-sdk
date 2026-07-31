import type { SenviokApiEndpointsApiKeysCreateApiKeyRequest } from '../models/SenviokApiEndpointsApiKeysCreateApiKeyRequest';
import type { SenviokApiEndpointsApiKeysCreateApiKeyResponse } from '../models/SenviokApiEndpointsApiKeysCreateApiKeyResponse';
import type { SenviokApiEndpointsApiKeysListApiKeysResponse } from '../models/SenviokApiEndpointsApiKeysListApiKeysResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ApiKeysService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsApiKeysCreateApiKeyResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsApiKeysCreateApiKeyEndpoint(requestBody: SenviokApiEndpointsApiKeysCreateApiKeyRequest): CancelablePromise<SenviokApiEndpointsApiKeysCreateApiKeyResponse>;
    /**
     * @returns SenviokApiEndpointsApiKeysListApiKeysResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsApiKeysListApiKeysEndpoint(): CancelablePromise<SenviokApiEndpointsApiKeysListApiKeysResponse>;
    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsApiKeysDeleteApiKeyEndpoint(id: string): CancelablePromise<void>;
}
