"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
class MessagesService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsMessagesMessageResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsMessagesSendMessageEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/messages',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.MessagesService = MessagesService;
