import type { SenviokApiEndpointsAudiencesAudienceResponse } from '../models/SenviokApiEndpointsAudiencesAudienceResponse';
import type { SenviokApiEndpointsAudiencesCreateAudienceRequest } from '../models/SenviokApiEndpointsAudiencesCreateAudienceRequest';
import type { SenviokApiEndpointsAudiencesListAudiencesResponse } from '../models/SenviokApiEndpointsAudiencesListAudiencesResponse';
import type { SenviokApiEndpointsContactsContactResponse } from '../models/SenviokApiEndpointsContactsContactResponse';
import type { SenviokApiEndpointsContactsCreateContactRequest } from '../models/SenviokApiEndpointsContactsCreateContactRequest';
import type { SenviokApiEndpointsContactsListContactsResponse } from '../models/SenviokApiEndpointsContactsListContactsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AudiencesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param audienceId
     * @param requestBody
     * @returns SenviokApiEndpointsContactsContactResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsContactsCreateContactEndpoint(audienceId: string, requestBody: SenviokApiEndpointsContactsCreateContactRequest): CancelablePromise<SenviokApiEndpointsContactsContactResponse>;
    /**
     * @param audienceId
     * @returns SenviokApiEndpointsContactsListContactsResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsContactsListContactsEndpoint(audienceId: string): CancelablePromise<SenviokApiEndpointsContactsListContactsResponse>;
    /**
     * @param audienceId
     * @param id
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsContactsDeleteContactEndpoint(audienceId: string, id: string): CancelablePromise<void>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAudiencesAudienceResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAudiencesCreateAudienceEndpoint(requestBody: SenviokApiEndpointsAudiencesCreateAudienceRequest): CancelablePromise<SenviokApiEndpointsAudiencesAudienceResponse>;
    /**
     * @returns SenviokApiEndpointsAudiencesListAudiencesResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAudiencesListAudiencesEndpoint(): CancelablePromise<SenviokApiEndpointsAudiencesListAudiencesResponse>;
    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsAudiencesDeleteAudienceEndpoint(id: string): CancelablePromise<void>;
}
