/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsEmailsSendEmailRequest } from '../models/SenviokApiEndpointsEmailsSendEmailRequest';
import type { SenviokApiEndpointsEmailsSendEmailResponse } from '../models/SenviokApiEndpointsEmailsSendEmailResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmailsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsEmailsSendEmailResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsEmailsSendEmailEndpoint(
        requestBody: SenviokApiEndpointsEmailsSendEmailRequest,
    ): CancelablePromise<SenviokApiEndpointsEmailsSendEmailResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/emails',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
