import type { SenviokApiEndpointsAnalyticsGetLogsResponse } from '../models/SenviokApiEndpointsAnalyticsGetLogsResponse';
import type { SenviokCoreEntitiesAnalyticsStats } from '../models/SenviokCoreEntitiesAnalyticsStats';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AnalyticsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param skip
     * @param take
     * @param sortOrder
     * @param channel
     * @param status
     * @param toAddress
     * @param fromAddress
     * @param subject
     * @param startDate
     * @param endDate
     * @returns SenviokApiEndpointsAnalyticsGetLogsResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAnalyticsGetLogsEndpoint(skip: number, take: number, sortOrder: string, channel?: string | null, status?: string | null, toAddress?: string | null, fromAddress?: string | null, subject?: string | null, startDate?: string | null, endDate?: string | null): CancelablePromise<SenviokApiEndpointsAnalyticsGetLogsResponse>;
    /**
     * @param grouping
     * @param startDate
     * @param endDate
     * @param channel
     * @param domain
     * @returns SenviokCoreEntitiesAnalyticsStats Success
     * @throws ApiError
     */
    senviokApiEndpointsAnalyticsGetStatsEndpoint(grouping: string, startDate?: string | null, endDate?: string | null, channel?: string | null, domain?: string | null): CancelablePromise<SenviokCoreEntitiesAnalyticsStats>;
}
