import type { SenviokApiEndpointsEmailsSendEmailRequest } from '../models/SenviokApiEndpointsEmailsSendEmailRequest';
import type { SenviokApiEndpointsEmailsSendEmailResponse } from '../models/SenviokApiEndpointsEmailsSendEmailResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class EmailsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsEmailsSendEmailResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsEmailsSendEmailEndpoint(requestBody: SenviokApiEndpointsEmailsSendEmailRequest): CancelablePromise<SenviokApiEndpointsEmailsSendEmailResponse>;
}
