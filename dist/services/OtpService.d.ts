import type { SenviokApiEndpointsOtpSendOtpRequest } from '../models/SenviokApiEndpointsOtpSendOtpRequest';
import type { SenviokApiEndpointsOtpSendOtpResponse } from '../models/SenviokApiEndpointsOtpSendOtpResponse';
import type { SenviokApiEndpointsOtpVerifyOtpRequest } from '../models/SenviokApiEndpointsOtpVerifyOtpRequest';
import type { SenviokApiEndpointsOtpVerifyOtpResponse } from '../models/SenviokApiEndpointsOtpVerifyOtpResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class OtpService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsOtpSendOtpResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsOtpSendOtpEndpoint(requestBody: SenviokApiEndpointsOtpSendOtpRequest): CancelablePromise<SenviokApiEndpointsOtpSendOtpResponse>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsOtpVerifyOtpResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsOtpVerifyOtpEndpoint(requestBody: SenviokApiEndpointsOtpVerifyOtpRequest): CancelablePromise<SenviokApiEndpointsOtpVerifyOtpResponse>;
}
