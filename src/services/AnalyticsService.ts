/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsAnalyticsGetLogsResponse } from '../models/SenviokApiEndpointsAnalyticsGetLogsResponse';
import type { SenviokCoreEntitiesAnalyticsStats } from '../models/SenviokCoreEntitiesAnalyticsStats';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AnalyticsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
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
    public senviokApiEndpointsAnalyticsGetLogsEndpoint(
        skip: number,
        take: number,
        sortOrder: string,
        channel?: string | null,
        status?: string | null,
        toAddress?: string | null,
        fromAddress?: string | null,
        subject?: string | null,
        startDate?: string | null,
        endDate?: string | null,
    ): CancelablePromise<SenviokApiEndpointsAnalyticsGetLogsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/analytics/logs',
            query: {
                'skip': skip,
                'take': take,
                'channel': channel,
                'status': status,
                'toAddress': toAddress,
                'fromAddress': fromAddress,
                'subject': subject,
                'startDate': startDate,
                'endDate': endDate,
                'sortOrder': sortOrder,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param grouping
     * @param startDate
     * @param endDate
     * @param channel
     * @param domain
     * @returns SenviokCoreEntitiesAnalyticsStats Success
     * @throws ApiError
     */
    public senviokApiEndpointsAnalyticsGetStatsEndpoint(
        grouping: string,
        startDate?: string | null,
        endDate?: string | null,
        channel?: string | null,
        domain?: string | null,
    ): CancelablePromise<SenviokCoreEntitiesAnalyticsStats> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/analytics/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'channel': channel,
                'domain': domain,
                'grouping': grouping,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
