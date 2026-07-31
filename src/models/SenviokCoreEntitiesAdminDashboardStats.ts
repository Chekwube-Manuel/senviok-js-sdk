/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokCoreEntitiesAdminDailyStats } from './SenviokCoreEntitiesAdminDailyStats';
import type { SenviokCoreEntitiesFailedMessageDetails } from './SenviokCoreEntitiesFailedMessageDetails';
import type { SenviokCoreEntitiesTenantUsageStats } from './SenviokCoreEntitiesTenantUsageStats';
export type SenviokCoreEntitiesAdminDashboardStats = {
    totalUsers?: number;
    totalTenants?: number;
    totalEmailsQueued?: number;
    totalEmailsSent?: number;
    totalEmailsFailed?: number;
    totalEmailsDelivered?: number;
    totalSmsQueued?: number;
    totalSmsSent?: number;
    totalSmsFailed?: number;
    totalSmsDelivered?: number;
    totalEmailsProcessed?: number;
    totalSmsProcessed?: number;
    emailDeliveryRate?: number;
    smsDeliveryRate?: number;
    totalFailures?: number;
    daily?: Array<SenviokCoreEntitiesAdminDailyStats>;
    topTenants?: Array<SenviokCoreEntitiesTenantUsageStats>;
    recentFailures?: Array<SenviokCoreEntitiesFailedMessageDetails>;
};

