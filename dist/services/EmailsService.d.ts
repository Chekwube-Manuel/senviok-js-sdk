import type { SenviokApiEndpointsEmailsSendEmailRequest } from '../models/SenviokApiEndpointsEmailsSendEmailRequest';
import type { SenviokApiEndpointsEmailsSendEmailResponse } from '../models/SenviokApiEndpointsEmailsSendEmailResponse';
import type { UploadedEmailAttachment } from '../models/UploadedEmailAttachment';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class EmailsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param formData
     * @returns UploadedEmailAttachment Uploaded attachment metadata
     * @throws ApiError
     */
    uploadEmailAttachmentEndpoint(formData: {
        file: Blob;
    }): CancelablePromise<UploadedEmailAttachment>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsEmailsSendEmailResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsEmailsSendEmailEndpoint(requestBody: SenviokApiEndpointsEmailsSendEmailRequest): CancelablePromise<SenviokApiEndpointsEmailsSendEmailResponse>;
}
