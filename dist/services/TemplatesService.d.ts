import type { SenviokApiEndpointsTemplatesCreateTemplateRequest } from '../models/SenviokApiEndpointsTemplatesCreateTemplateRequest';
import type { SenviokApiEndpointsTemplatesTemplateResponse } from '../models/SenviokApiEndpointsTemplatesTemplateResponse';
import type { SenviokApiEndpointsTemplatesUpdateTemplateRequest } from '../models/SenviokApiEndpointsTemplatesUpdateTemplateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class TemplatesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsTemplatesTemplateResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsTemplatesCreateTemplateEndpoint(requestBody: SenviokApiEndpointsTemplatesCreateTemplateRequest): CancelablePromise<SenviokApiEndpointsTemplatesTemplateResponse>;
    /**
     * @returns SenviokApiEndpointsTemplatesTemplateResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsTemplatesListTemplatesEndpoint(): CancelablePromise<Array<SenviokApiEndpointsTemplatesTemplateResponse>>;
    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    senviokApiEndpointsTemplatesDeleteTemplateEndpoint(id: string): CancelablePromise<void>;
    /**
     * @param id
     * @returns SenviokApiEndpointsTemplatesTemplateResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsTemplatesGetTemplateEndpoint(id: string): CancelablePromise<SenviokApiEndpointsTemplatesTemplateResponse>;
    /**
     * @param id
     * @param requestBody
     * @returns SenviokApiEndpointsTemplatesTemplateResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsTemplatesUpdateTemplateEndpoint(id: string, requestBody: SenviokApiEndpointsTemplatesUpdateTemplateRequest): CancelablePromise<SenviokApiEndpointsTemplatesTemplateResponse>;
}
