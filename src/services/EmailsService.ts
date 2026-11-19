/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsEmailsSendEmailRequest } from '../models/SenviokApiEndpointsEmailsSendEmailRequest';
import type { SenviokApiEndpointsEmailsSendEmailResponse } from '../models/SenviokApiEndpointsEmailsSendEmailResponse';
import type { UploadedEmailAttachment } from '../models/UploadedEmailAttachment';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmailsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param formData
     * @returns UploadedEmailAttachment Uploaded attachment metadata
     * @throws ApiError
     */
    public uploadEmailAttachmentEndpoint(
        formData: {
            file: Blob;
        },
    ): CancelablePromise<UploadedEmailAttachment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/emails/attachments',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Invalid upload request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                413: `File too large`,
            },
        });
    }
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
