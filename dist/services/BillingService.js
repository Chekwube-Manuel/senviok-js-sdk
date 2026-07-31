"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
class BillingService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsBillingBachsWebhookEndpoint() {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/billing/bachs-webhook',
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsBillingCreateCheckoutSessionResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsBillingCreateCheckoutSessionEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/billing/checkout',
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
     * @returns SenviokApiEndpointsBillingFundWalletResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsBillingFundWalletEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/billing/wallet/fund',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokApiEndpointsBillingGetBillingPlansResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsBillingGetBillingPlansEndpoint() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/billing/plans',
        });
    }
    /**
     * @returns SenviokApiEndpointsBillingTenantBillingResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsBillingGetTenantBillingEndpoint() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/billing/tenant',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.BillingService = BillingService;
