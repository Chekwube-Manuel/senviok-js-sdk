export type SenviokApiEndpointsWebhooksWebhookDeliveryResponse = {
    id?: string;
    webhookId?: string;
    eventId?: string;
    eventType?: string;
    attempt?: number;
    statusCode?: number;
    responseBody?: string | null;
    errorMessage?: string | null;
    createdAt?: string;
};
