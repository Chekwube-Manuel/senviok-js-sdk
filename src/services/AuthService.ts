/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
export class AuthService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthForgotPasswordResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsAuthForgotPasswordEndpoint(
        requestBody: SenviokApiEndpointsAuthForgotPasswordRequest,
    ): CancelablePromise<SenviokApiEndpointsAuthForgotPasswordResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/forgot-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthAuthResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsAuthGithubOAuthCallbackEndpoint(
        requestBody: SenviokApiEndpointsAuthOAuthCallbackRequest,
    ): CancelablePromise<SenviokApiEndpointsAuthAuthResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/github/callback',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthAuthResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsAuthGoogleOAuthCallbackEndpoint(
        requestBody: SenviokApiEndpointsAuthOAuthCallbackRequest,
    ): CancelablePromise<SenviokApiEndpointsAuthAuthResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/google/callback',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthAuthResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsAuthLoginEndpoint(
        requestBody: SenviokApiEndpointsAuthLoginRequest,
    ): CancelablePromise<SenviokApiEndpointsAuthAuthResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthResetPasswordResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsAuthResetPasswordEndpoint(
        requestBody: SenviokApiEndpointsAuthResetPasswordRequest,
    ): CancelablePromise<SenviokApiEndpointsAuthResetPasswordResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/reset-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthSignupResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsAuthSignupEndpoint(
        requestBody: SenviokApiEndpointsAuthSignupRequest,
    ): CancelablePromise<SenviokApiEndpointsAuthSignupResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/signup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthSignupResponse Success
     * @throws ApiError
     */
    public senviokApiEndpointsAuthVerifySignupEndpoint(
        requestBody: SenviokApiEndpointsAuthVerifySignupRequest,
    ): CancelablePromise<SenviokApiEndpointsAuthSignupResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/verify-signup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
