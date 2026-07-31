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
export declare class AdminService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param startDate
     * @param endDate
     * @returns SenviokCoreEntitiesAdminDashboardStats Success
     * @throws ApiError
     */
    senviokApiEndpointsAdminGetAdminStatsEndpoint(startDate?: string | null, endDate?: string | null): CancelablePromise<SenviokCoreEntitiesAdminDashboardStats>;
    /**
     * @param query
     * @returns SenviokApiEndpointsAdminGetAdminTenantsResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAdminGetAdminTenantsEndpoint(query?: string | null): CancelablePromise<SenviokApiEndpointsAdminGetAdminTenantsResponse>;
    /**
     * @returns SenviokCoreEntitiesWaitlistEntry Success
     * @throws ApiError
     */
    senviokApiEndpointsAdminGetAdminWaitlistEndpoint(): CancelablePromise<Array<SenviokCoreEntitiesWaitlistEntry>>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAdminPromoteUserResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAdminPromoteUserEndpoint(requestBody: SenviokApiEndpointsAdminPromoteUserRequest): CancelablePromise<SenviokApiEndpointsAdminPromoteUserResponse>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAdminUpdateBillingPlanAdminResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAdminUpdateBillingPlanAdminEndpoint(requestBody: SenviokApiEndpointsAdminUpdateBillingPlanAdminRequest): CancelablePromise<SenviokApiEndpointsAdminUpdateBillingPlanAdminResponse>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAdminUpdateTenantPlanAdminResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAdminUpdateTenantPlanAdminEndpoint(requestBody: SenviokApiEndpointsAdminUpdateTenantPlanAdminRequest): CancelablePromise<SenviokApiEndpointsAdminUpdateTenantPlanAdminResponse>;
}
