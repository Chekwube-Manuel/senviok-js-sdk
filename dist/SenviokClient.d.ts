import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AdminService } from './services/AdminService';
import { AnalyticsService } from './services/AnalyticsService';
import { ApiKeysService } from './services/ApiKeysService';
import { AudiencesService } from './services/AudiencesService';
import { AuthService } from './services/AuthService';
import { BillingService } from './services/BillingService';
import { DefaultService } from './services/DefaultService';
import { DomainsService } from './services/DomainsService';
import { EmailsService } from './services/EmailsService';
import { MessagesService } from './services/MessagesService';
import { OtpService } from './services/OtpService';
import { SenderEmailsService } from './services/SenderEmailsService';
import { SmsService } from './services/SmsService';
import { SuppressionsService } from './services/SuppressionsService';
import { TemplatesService } from './services/TemplatesService';
import { UnsubscribeService } from './services/UnsubscribeService';
import { V1Service } from './services/V1Service';
import { WaitlistService } from './services/WaitlistService';
import { WebhooksService } from './services/WebhooksService';
import type { SenviokApiEndpointsEmailsSendEmailRequest } from './models/SenviokApiEndpointsEmailsSendEmailRequest';
import type { SenviokApiEndpointsSmsSendSmsRequest } from './models/SenviokApiEndpointsSmsSendSmsRequest';
import type { SenviokApiEndpointsWebhooksCreateWebhookRequest } from './models/SenviokApiEndpointsWebhooksCreateWebhookRequest';
import type { SenviokApiEndpointsTemplatesCreateTemplateRequest } from './models/SenviokApiEndpointsTemplatesCreateTemplateRequest';
import type { SenviokApiEndpointsTemplatesUpdateTemplateRequest } from './models/SenviokApiEndpointsTemplatesUpdateTemplateRequest';
import type { SenviokApiEndpointsDomainsCreateDomainRequest } from './models/SenviokApiEndpointsDomainsCreateDomainRequest';
import type { SenviokApiEndpointsAudiencesCreateAudienceRequest } from './models/SenviokApiEndpointsAudiencesCreateAudienceRequest';
import type { SenviokApiEndpointsContactsCreateContactRequest } from './models/SenviokApiEndpointsContactsCreateContactRequest';
import type { SenviokApiEndpointsSuppressionsCreateSuppressionRequest } from './models/SenviokApiEndpointsSuppressionsCreateSuppressionRequest';
import type { SenviokApiEndpointsApiKeysCreateApiKeyRequest } from './models/SenviokApiEndpointsApiKeysCreateApiKeyRequest';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export declare class SenviokClient {
    readonly admin: AdminService;
    readonly analytics: AnalyticsService;
    readonly apiKeys: ApiKeysService;
    readonly audiences: AudiencesService;
    readonly auth: AuthService;
    readonly billing: BillingService;
    readonly default: DefaultService;
    readonly domains: DomainsService;
    readonly emails: EmailsService;
    readonly messages: MessagesService;
    readonly otp: OtpService;
    readonly senderEmails: SenderEmailsService;
    readonly sms: SmsService;
    readonly suppressions: SuppressionsService;
    readonly templates: TemplatesService;
    readonly unsubscribe: UnsubscribeService;
    readonly v1: V1Service;
    readonly waitlist: WaitlistService;
    readonly webhooks: WebhooksService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export declare class Senviok {
    private readonly client;
    constructor(apiKey: string, config?: {
        BASE?: string;
    });
    get emails(): {
        send: (options: SenviokApiEndpointsEmailsSendEmailRequest) => import(".").CancelablePromise<import(".").SenviokApiEndpointsEmailsSendEmailResponse>;
    };
    get sms(): {
        send: (options: SenviokApiEndpointsSmsSendSmsRequest) => import(".").CancelablePromise<import(".").SenviokApiEndpointsSmsSendSmsResponse>;
    };
    get whatsapp(): {
        send: (options: {
            to: string;
            from: string;
            text: string;
        }) => import(".").CancelablePromise<unknown>;
    };
    get messages(): {
        list: (options?: {
            skip?: number;
            take?: number;
            sortOrder?: "asc" | "desc";
            channel?: string;
            status?: string;
            toAddress?: string;
            fromAddress?: string;
            subject?: string;
            startDate?: string;
            endDate?: string;
        }) => import(".").CancelablePromise<import(".").SenviokApiEndpointsAnalyticsGetLogsResponse>;
    };
    get webhooks(): {
        create: (options: SenviokApiEndpointsWebhooksCreateWebhookRequest) => import(".").CancelablePromise<import(".").SenviokApiEndpointsWebhooksWebhookResponse>;
        list: () => import(".").CancelablePromise<import(".").SenviokApiEndpointsWebhooksListWebhooksResponse>;
        delete: (id: string) => import(".").CancelablePromise<void>;
        logs: (webhookId: string) => import(".").CancelablePromise<import(".").SenviokApiEndpointsWebhooksGetWebhookDeliveriesResponse>;
        verifySignature: (rawBody: string, signature: string, secret: string) => boolean;
    };
    get templates(): {
        create: (options: SenviokApiEndpointsTemplatesCreateTemplateRequest) => import(".").CancelablePromise<import(".").SenviokApiEndpointsTemplatesTemplateResponse>;
        list: () => import(".").CancelablePromise<import(".").SenviokApiEndpointsTemplatesTemplateResponse[]>;
        get: (id: string) => import(".").CancelablePromise<import(".").SenviokApiEndpointsTemplatesTemplateResponse>;
        update: (id: string, options: SenviokApiEndpointsTemplatesUpdateTemplateRequest) => import(".").CancelablePromise<import(".").SenviokApiEndpointsTemplatesTemplateResponse>;
        delete: (id: string) => import(".").CancelablePromise<void>;
    };
    get domains(): {
        create: (options: SenviokApiEndpointsDomainsCreateDomainRequest) => import(".").CancelablePromise<import(".").SenviokApiEndpointsDomainsDomainResponse>;
        list: () => import(".").CancelablePromise<import(".").SenviokApiEndpointsDomainsListDomainsResponse>;
        getDkim: (id: string) => import(".").CancelablePromise<import(".").SenviokApiEndpointsDomainsGetDomainDkimResponse>;
        verify: (id: string) => import(".").CancelablePromise<import(".").SenviokApiEndpointsDomainsVerifyDomainResponse>;
    };
    get audiences(): {
        create: (options: SenviokApiEndpointsAudiencesCreateAudienceRequest) => import(".").CancelablePromise<import(".").SenviokApiEndpointsAudiencesAudienceResponse>;
        list: () => import(".").CancelablePromise<import(".").SenviokApiEndpointsAudiencesListAudiencesResponse>;
        delete: (id: string) => import(".").CancelablePromise<void>;
    };
    get contacts(): {
        create: (audienceId: string, options: SenviokApiEndpointsContactsCreateContactRequest) => import(".").CancelablePromise<import(".").SenviokApiEndpointsContactsContactResponse>;
        list: (audienceId: string) => import(".").CancelablePromise<import(".").SenviokApiEndpointsContactsListContactsResponse>;
        delete: (audienceId: string, id: string) => import(".").CancelablePromise<void>;
    };
    get suppressions(): {
        create: (options: SenviokApiEndpointsSuppressionsCreateSuppressionRequest) => import(".").CancelablePromise<import(".").SenviokApiEndpointsSuppressionsSuppressionResponse>;
        list: () => import(".").CancelablePromise<import(".").SenviokApiEndpointsSuppressionsSuppressionResponse[]>;
        delete: (id: string) => import(".").CancelablePromise<void>;
    };
    get apiKeys(): {
        create: (options: SenviokApiEndpointsApiKeysCreateApiKeyRequest) => import(".").CancelablePromise<import(".").SenviokApiEndpointsApiKeysCreateApiKeyResponse>;
        list: () => import(".").CancelablePromise<import(".").SenviokApiEndpointsApiKeysListApiKeysResponse>;
        delete: (id: string) => import(".").CancelablePromise<void>;
    };
}
export {};
