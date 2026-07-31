import type { SenviokApiEndpointsBillingCreateCheckoutSessionRequest } from '../models/SenviokApiEndpointsBillingCreateCheckoutSessionRequest';
import type { SenviokApiEndpointsBillingCreateCheckoutSessionResponse } from '../models/SenviokApiEndpointsBillingCreateCheckoutSessionResponse';
import type { SenviokApiEndpointsBillingFundWalletRequest } from '../models/SenviokApiEndpointsBillingFundWalletRequest';
import type { SenviokApiEndpointsBillingFundWalletResponse } from '../models/SenviokApiEndpointsBillingFundWalletResponse';
import type { SenviokApiEndpointsBillingGetBillingPlansResponse } from '../models/SenviokApiEndpointsBillingGetBillingPlansResponse';
import type { SenviokApiEndpointsBillingTenantBillingResponse } from '../models/SenviokApiEndpointsBillingTenantBillingResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class BillingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsBillingBachsWebhookEndpoint(): CancelablePromise<void>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsBillingCreateCheckoutSessionResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsBillingCreateCheckoutSessionEndpoint(requestBody: SenviokApiEndpointsBillingCreateCheckoutSessionRequest): CancelablePromise<SenviokApiEndpointsBillingCreateCheckoutSessionResponse>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsBillingFundWalletResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsBillingFundWalletEndpoint(requestBody: SenviokApiEndpointsBillingFundWalletRequest): CancelablePromise<SenviokApiEndpointsBillingFundWalletResponse>;
    /**
     * @returns SenviokApiEndpointsBillingGetBillingPlansResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsBillingGetBillingPlansEndpoint(): CancelablePromise<SenviokApiEndpointsBillingGetBillingPlansResponse>;
    /**
     * @returns SenviokApiEndpointsBillingTenantBillingResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsBillingGetTenantBillingEndpoint(): CancelablePromise<SenviokApiEndpointsBillingTenantBillingResponse>;
}
