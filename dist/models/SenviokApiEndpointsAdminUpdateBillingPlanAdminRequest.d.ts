export type SenviokApiEndpointsAdminUpdateBillingPlanAdminRequest = {
    planName?: string;
    price?: number;
    emailLimit?: number;
    smsLimit?: number;
    featuresJson?: string;
    overageEmailPrice?: number;
};
