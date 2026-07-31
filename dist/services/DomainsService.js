"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainsService = void 0;
class DomainsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsDomainsDomainResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsDomainsCreateDomainEndpoint(requestBody) {
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
    senviokApiEndpointsDomainsListDomainsEndpoint() {
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
    senviokApiEndpointsDomainsGetDomainDkimEndpoint(id) {
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
    senviokApiEndpointsDomainsVerifyDomainEndpoint(id) {
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
exports.DomainsService = DomainsService;
