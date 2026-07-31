/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokCoreEntitiesDailyStats } from './SenviokCoreEntitiesDailyStats';
export type SenviokCoreEntitiesAnalyticsStats = {
    totalMessages?: number;
    totalSent?: number;
    totalFailed?: number;
    emailSent?: number;
    smsSent?: number;
    daily?: Array<SenviokCoreEntitiesDailyStats>;
};

