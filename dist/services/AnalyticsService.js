"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsService = void 0;
class AnalyticsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
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
    senviokApiEndpointsAnalyticsGetLogsEndpoint(skip, take, sortOrder, channel, status, toAddress, fromAddress, subject, startDate, endDate) {
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
    senviokApiEndpointsAnalyticsGetStatsEndpoint(grouping, startDate, endDate, channel, domain) {
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
exports.AnalyticsService = AnalyticsService;
