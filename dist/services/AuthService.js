"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
class AuthService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @param requestBody
     * @returns SenviokApiEndpointsAuthForgotPasswordResponse Success
     * @throws ApiError
     */
    senviokApiEndpointsAuthForgotPasswordEndpoint(requestBody) {
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
    senviokApiEndpointsAuthGithubOAuthCallbackEndpoint(requestBody) {
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
    senviokApiEndpointsAuthGoogleOAuthCallbackEndpoint(requestBody) {
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
    senviokApiEndpointsAuthLoginEndpoint(requestBody) {
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
    senviokApiEndpointsAuthResetPasswordEndpoint(requestBody) {
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
    senviokApiEndpointsAuthSignupEndpoint(requestBody) {
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
    senviokApiEndpointsAuthVerifySignupEndpoint(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/auth/verify-signup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
exports.AuthService = AuthService;
