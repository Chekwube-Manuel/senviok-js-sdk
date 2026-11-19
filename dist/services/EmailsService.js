"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsService = void 0;
class EmailsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param formData
     * @returns UploadedEmailAttachment Uploaded attachment metadata
     * @throws ApiError
     */
    uploadEmailAttachmentEndpoint(formData) {
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
    senviokApiEndpointsEmailsSendEmailEndpoint(requestBody) {
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
exports.EmailsService = EmailsService;
