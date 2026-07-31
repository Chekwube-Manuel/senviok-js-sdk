export type SenviokApiEndpointsBillingTenantBillingResponse = {
    id?: string;
    name?: string;
    plan?: string;
    subscriptionStatus?: string;
    billingPeriodStart?: string | null;
    billingPeriodEnd?: string | null;
    emailsSentThisMonth?: number;
    smsSentThisMonth?: number;
    walletBalance?: number;
};
