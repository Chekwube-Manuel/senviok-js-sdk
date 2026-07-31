/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsAdminGetAdminTenantsResponse } from '../models/SenviokApiEndpointsAdminGetAdminTenantsResponse';
import type { SenviokApiEndpointsAdminPromoteUserRequest } from '../models/SenviokApiEndpointsAdminPromoteUserRequest';
import type { SenviokApiEndpointsAdminPromoteUserResponse } from '../models/SenviokApiEndpointsAdminPromoteUserResponse';
import type { SenviokApiEndpointsAdminUpdateBillingPlanAdminRequest } from '../models/SenviokApiEndpointsAdminUpdateBillingPlanAdminRequest';
import type { SenviokApiEndpointsAdminUpdateBillingPlanAdminResponse } from '../models/SenviokApiEndpointsAdminUpdateBillingPlanAdminResponse';
import type { SenviokApiEndpointsAdminUpdateTenantPlanAdminRequest } from '../models/SenviokApiEndpointsAdminUpdateTenantPlanAdminRequest';
import type { SenviokApiEndpointsAdminUpdateTenantPlanAdminResponse } from '../models/SenviokApiEndpointsAdminUpdateTenantPlanAdminResponse';
import type { SenviokCoreEntitiesAdminDashboardStats } from '../models/SenviokCoreEntitiesAdminDashboardStats';
import type { SenviokCoreEntitiesWaitlistEntry } from '../models/SenviokCoreEntitiesWaitlistEntry';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AdminService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param startDate
     * @param endDate
     * @returns SenviokCoreEntitiesAdminDashboardStats Success
     * @throws ApiError
     */
    public senviokApiEndpointsAdminGetAdminStatsEndpoint(
        startDate?: string | null,
        endDate?: string | null,
    ): CancelablePromise<SenviokCoreEntitiesAdminDashboardStats> {
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
    public senviokApiEndpointsAdminGetAdminTenantsEndpoint(
        query?: string | null,
    ): CancelablePromise<SenviokApiEndpointsAdminGetAdminTenantsResponse> {
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
    public senviokApiEndpointsAdminGetAdminWaitlistEndpoint(): CancelablePromise<Array<SenviokCoreEntitiesWaitlistEntry>> {
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
    public senviokApiEndpointsAdminPromoteUserEndpoint(
        requestBody: SenviokApiEndpointsAdminPromoteUserRequest,
    ): CancelablePromise<SenviokApiEndpointsAdminPromoteUserResponse> {
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
    public senviokApiEndpointsAdminUpdateBillingPlanAdminEndpoint(
        requestBody: SenviokApiEndpointsAdminUpdateBillingPlanAdminRequest,
    ): CancelablePromise<SenviokApiEndpointsAdminUpdateBillingPlanAdminResponse> {
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
    public senviokApiEndpointsAdminUpdateTenantPlanAdminEndpoint(
        requestBody: SenviokApiEndpointsAdminUpdateTenantPlanAdminRequest,
    ): CancelablePromise<SenviokApiEndpointsAdminUpdateTenantPlanAdminResponse> {
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
