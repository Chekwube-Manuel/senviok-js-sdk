export type SenviokApiEndpointsOtpSendOtpRequest = {
    to?: string;
    from?: string;
    channel?: string;
    template?: string | null;
    length?: number;
    expiryMinutes?: number;
};
