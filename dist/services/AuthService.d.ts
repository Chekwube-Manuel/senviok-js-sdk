import type { SenviokApiEndpointsAuthAuthResponse } from '../models/SenviokApiEndpointsAuthAuthResponse';
import type { SenviokApiEndpointsAuthForgotPasswordRequest } from '../models/SenviokApiEndpointsAuthForgotPasswordRequest';
import type { SenviokApiEndpointsAuthForgotPasswordResponse } from '../models/SenviokApiEndpointsAuthForgotPasswordResponse';
import type { SenviokApiEndpointsAuthLoginRequest } from '../models/SenviokApiEndpointsAuthLoginRequest';
import type { SenviokApiEndpointsAuthOAuthCallbackRequest } from '../models/SenviokApiEndpointsAuthOAuthCallbackRequest';
import type { SenviokApiEndpointsAuthResetPasswordRequest } from '../models/SenviokApiEndpointsAuthResetPasswordRequest';
import type { SenviokApiEndpointsAuthResetPasswordResponse } from '../models/SenviokApiEndpointsAuthResetPasswordResponse';
import type { SenviokApiEndpointsAuthSignupRequest } from '../models/SenviokApiEndpointsAuthSignupRequest';
import type { SenviokApiEndpointsAuthSignupResponse } from '../models/SenviokApiEndpointsAuthSignupResponse';
import type { SenviokApiEndpointsAuthVerifySignupRequest } from '../models/SenviokApiEndpointsAuthVerifySignupRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AuthService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthForgotPasswordResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAuthForgotPasswordEndpoint(requestBody: SenviokApiEndpointsAuthForgotPasswordRequest): CancelablePromise<SenviokApiEndpointsAuthForgotPasswordResponse>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthAuthResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAuthGithubOAuthCallbackEndpoint(requestBody: SenviokApiEndpointsAuthOAuthCallbackRequest): CancelablePromise<SenviokApiEndpointsAuthAuthResponse>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthAuthResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAuthGoogleOAuthCallbackEndpoint(requestBody: SenviokApiEndpointsAuthOAuthCallbackRequest): CancelablePromise<SenviokApiEndpointsAuthAuthResponse>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthAuthResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAuthLoginEndpoint(requestBody: SenviokApiEndpointsAuthLoginRequest): CancelablePromise<SenviokApiEndpointsAuthAuthResponse>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthResetPasswordResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAuthResetPasswordEndpoint(requestBody: SenviokApiEndpointsAuthResetPasswordRequest): CancelablePromise<SenviokApiEndpointsAuthResetPasswordResponse>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthSignupResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAuthSignupEndpoint(requestBody: SenviokApiEndpointsAuthSignupRequest): CancelablePromise<SenviokApiEndpointsAuthSignupResponse>;
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthSignupResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAuthVerifySignupEndpoint(requestBody: SenviokApiEndpointsAuthVerifySignupRequest): CancelablePromise<SenviokApiEndpointsAuthSignupResponse>;
}
