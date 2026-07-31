/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsBillingCreateCheckoutSessionRequest } from '../models/SenviokApiEndpointsBillingCreateCheckoutSessionRequest';
import type { SenviokApiEndpointsBillingCreateCheckoutSessionResponse } from '../models/SenviokApiEndpointsBillingCreateCheckoutSessionResponse';
import type { SenviokApiEndpointsBillingFundWalletRequest } from '../models/SenviokApiEndpointsBillingFundWalletRequest';
import type { SenviokApiEndpointsBillingFundWalletResponse } from '../models/SenviokApiEndpointsBillingFundWalletResponse';
import type { SenviokApiEndpointsBillingGetBillingPlansResponse } from '../models/SenviokApiEndpointsBillingGetBillingPlansResponse';
import type { SenviokApiEndpointsBillingTenantBillingResponse } from '../models/SenviokApiEndpointsBillingTenantBillingResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BillingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns void
     * @throws ApiError
     */
    public senviokApiEndpointsBillingBachsWebhookEndpoint(): CancelablePromise<void> {
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
    public senviokApiEndpointsBillingCreateCheckoutSessionEndpoint(
        requestBody: SenviokApiEndpointsBillingCreateCheckoutSessionRequest,
    ): CancelablePromise<SenviokApiEndpointsBillingCreateCheckoutSessionResponse> {
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
    public senviokApiEndpointsBillingFundWalletEndpoint(
        requestBody: SenviokApiEndpointsBillingFundWalletRequest,
    ): CancelablePromise<SenviokApiEndpointsBillingFundWalletResponse> {
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
    public senviokApiEndpointsBillingGetBillingPlansEndpoint(): CancelablePromise<SenviokApiEndpointsBillingGetBillingPlansResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/billing/plans',
        });
    }
    /**
     * @returns SenviokApiEndpointsBillingTenantBillingResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsBillingGetTenantBillingEndpoint(): CancelablePromise<SenviokApiEndpointsBillingTenantBillingResponse> {
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
