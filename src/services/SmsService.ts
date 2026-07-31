/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsSmsSendSmsRequest } from '../models/SenviokApiEndpointsSmsSendSmsRequest';
import type { SenviokApiEndpointsSmsSendSmsResponse } from '../models/SenviokApiEndpointsSmsSendSmsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SmsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsSmsSendSmsResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsSmsSendSmsEndpoint(
        requestBody: SenviokApiEndpointsSmsSendSmsRequest,
    ): CancelablePromise<SenviokApiEndpointsSmsSendSmsResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/sms',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
