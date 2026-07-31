"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiencesService = void 0;
class AudiencesService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param audienceId
     * @param requestBody
     * @returns SenviokApiEndpointsContactsContactResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsContactsCreateContactEndpoint(audienceId, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/audiences/{audienceId}/contacts',
            path: {
                'audienceId': audienceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param audienceId
     * @returns SenviokApiEndpointsContactsListContactsResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsContactsListContactsEndpoint(audienceId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/audiences/{audienceId}/contacts',
            path: {
                'audienceId': audienceId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param audienceId
     * @param id
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsContactsDeleteContactEndpoint(audienceId, id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/audiences/{audienceId}/contacts/{id}',
            path: {
                'audienceId': audienceId,
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAudiencesAudienceResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAudiencesCreateAudienceEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/audiences',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns SenviokApiEndpointsAudiencesListAudiencesResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAudiencesListAudiencesEndpoint() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/audiences',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsAudiencesDeleteAudienceEndpoint(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/audiences/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.AudiencesService = AudiencesService;
