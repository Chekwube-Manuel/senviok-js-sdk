import type { SenviokApiEndpointsDomainsCreateDomainRequest } from '../models/SenviokApiEndpointsDomainsCreateDomainRequest';
import type { SenviokApiEndpointsDomainsDomainResponse } from '../models/SenviokApiEndpointsDomainsDomainResponse';
import type { SenviokApiEndpointsDomainsGetDomainDkimResponse } from '../models/SenviokApiEndpointsDomainsGetDomainDkimResponse';
import type { SenviokApiEndpointsDomainsListDomainsResponse } from '../models/SenviokApiEndpointsDomainsListDomainsResponse';
import type { SenviokApiEndpointsDomainsVerifyDomainResponse } from '../models/SenviokApiEndpointsDomainsVerifyDomainResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class DomainsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsDomainsDomainResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsDomainsCreateDomainEndpoint(requestBody: SenviokApiEndpointsDomainsCreateDomainRequest): CancelablePromise<SenviokApiEndpointsDomainsDomainResponse>;
    /**
     * @returns SenviokApiEndpointsDomainsListDomainsResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsDomainsListDomainsEndpoint(): CancelablePromise<SenviokApiEndpointsDomainsListDomainsResponse>;
    /**
     * @param id
     * @returns SenviokApiEndpointsDomainsGetDomainDkimResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsDomainsGetDomainDkimEndpoint(id: string): CancelablePromise<SenviokApiEndpointsDomainsGetDomainDkimResponse>;
    /**
     * @param id
     * @returns SenviokApiEndpointsDomainsVerifyDomainResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsDomainsVerifyDomainEndpoint(id: string): CancelablePromise<SenviokApiEndpointsDomainsVerifyDomainResponse>;
}
