import type { SenviokApiEndpointsSmsSendSmsRequest } from '../models/SenviokApiEndpointsSmsSendSmsRequest';
import type { SenviokApiEndpointsSmsSendSmsResponse } from '../models/SenviokApiEndpointsSmsSendSmsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SmsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsSmsSendSmsResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsSmsSendSmsEndpoint(requestBody: SenviokApiEndpointsSmsSendSmsRequest): CancelablePromise<SenviokApiEndpointsSmsSendSmsResponse>;
}
