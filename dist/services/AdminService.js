"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
class AdminService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param startDate
     * @param endDate
     * @returns SenviokCoreEntitiesAdminDashboardStats Success
     * @throws ApiError
     */
    senviokApiEndpointsAdminGetAdminStatsEndpoint(startDate, endDate) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param query
     * @returns SenviokApiEndpointsAdminGetAdminTenantsResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAdminGetAdminTenantsEndpoint(query) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/tenants',
            query: {
                'query': query,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokCoreEntitiesWaitlistEntry Success
     * @throws ApiError
     */
    senviokApiEndpointsAdminGetAdminWaitlistEndpoint() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/waitlist',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAdminPromoteUserResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAdminPromoteUserEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/promote',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAdminUpdateBillingPlanAdminResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAdminUpdateBillingPlanAdminEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/plans',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAdminUpdateTenantPlanAdminResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAdminUpdateTenantPlanAdminEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/upgrade-tenant',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.AdminService = AdminService;
