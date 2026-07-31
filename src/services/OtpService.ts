/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsOtpSendOtpRequest } from '../models/SenviokApiEndpointsOtpSendOtpRequest';
import type { SenviokApiEndpointsOtpSendOtpResponse } from '../models/SenviokApiEndpointsOtpSendOtpResponse';
import type { SenviokApiEndpointsOtpVerifyOtpRequest } from '../models/SenviokApiEndpointsOtpVerifyOtpRequest';
import type { SenviokApiEndpointsOtpVerifyOtpResponse } from '../models/SenviokApiEndpointsOtpVerifyOtpResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OtpService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsOtpSendOtpResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsOtpSendOtpEndpoint(
        requestBody: SenviokApiEndpointsOtpSendOtpRequest,
    ): CancelablePromise<SenviokApiEndpointsOtpSendOtpResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/otp/send',
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
     * @returns SenviokApiEndpointsOtpVerifyOtpResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsOtpVerifyOtpEndpoint(
        requestBody: SenviokApiEndpointsOtpVerifyOtpRequest,
    ): CancelablePromise<SenviokApiEndpointsOtpVerifyOtpResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/otp/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
