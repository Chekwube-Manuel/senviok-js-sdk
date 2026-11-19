import { createHmac, timingSafeEqual } from 'crypto';
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
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
import type { UploadedEmailAttachment } from './models/UploadedEmailAttachment';
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
export class SenviokClient {
    public readonly admin: AdminService;
    public readonly analytics: AnalyticsService;
    public readonly apiKeys: ApiKeysService;
    public readonly audiences: AudiencesService;
    public readonly auth: AuthService;
    public readonly billing: BillingService;
    public readonly default: DefaultService;
    public readonly domains: DomainsService;
    public readonly emails: EmailsService;
    public readonly messages: MessagesService;
    public readonly otp: OtpService;
    public readonly senderEmails: SenderEmailsService;
    public readonly sms: SmsService;
    public readonly suppressions: SuppressionsService;
    public readonly templates: TemplatesService;
    public readonly unsubscribe: UnsubscribeService;
    public readonly v1: V1Service;
    public readonly waitlist: WaitlistService;
    public readonly webhooks: WebhooksService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://localhost:5033',
            VERSION: config?.VERSION ?? '1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.admin = new AdminService(this.request);
        this.analytics = new AnalyticsService(this.request);
        this.apiKeys = new ApiKeysService(this.request);
        this.audiences = new AudiencesService(this.request);
        this.auth = new AuthService(this.request);
        this.billing = new BillingService(this.request);
        this.default = new DefaultService(this.request);
        this.domains = new DomainsService(this.request);
        this.emails = new EmailsService(this.request);
        this.messages = new MessagesService(this.request);
        this.otp = new OtpService(this.request);
        this.senderEmails = new SenderEmailsService(this.request);
        this.sms = new SmsService(this.request);
        this.suppressions = new SuppressionsService(this.request);
        this.templates = new TemplatesService(this.request);
        this.unsubscribe = new UnsubscribeService(this.request);
        this.v1 = new V1Service(this.request);
        this.waitlist = new WaitlistService(this.request);
        this.webhooks = new WebhooksService(this.request);
    }
}

export class Senviok {
    private readonly client: SenviokClient;

    constructor(apiKey: string, config?: { BASE?: string }) {
        this.client = new SenviokClient({
            TOKEN: apiKey,
            BASE: config?.BASE ?? 'https://api.senviok.live'
        });
    }

    public get emails() {
        return {
            send: (options: SenviokApiEndpointsEmailsSendEmailRequest) => {
                return this.client.emails.senviokApiEndpointsEmailsSendEmailEndpoint(options);
            },
            uploadAttachment: (file: Blob): import('./core/CancelablePromise').CancelablePromise<UploadedEmailAttachment> => {
                return this.client.emails.uploadEmailAttachmentEndpoint({ file });
            },
        };
    }

    public get sms() {
        return {
            send: (options: SenviokApiEndpointsSmsSendSmsRequest) => {
                return this.client.sms.senviokApiEndpointsSmsSendSmsEndpoint(options);
            }
        };
    }

    public get whatsapp() {
        return {
            send: (options: { to: string; from: string; text: string }) => {
                return this.client.request.request({
                    method: 'POST',
                    url: '/v1/whatsapp',
                    body: options,
                    mediaType: 'application/json',
                    errors: {
                        401: `Unauthorized`,
                        403: `Forbidden`,
                    },
                });
            }
        };
    }

    public get messages() {
        return {
            list: (options?: {
                skip?: number;
                take?: number;
                sortOrder?: 'asc' | 'desc';
                channel?: string;
                status?: string;
                toAddress?: string;
                fromAddress?: string;
                subject?: string;
                startDate?: string;
                endDate?: string;
            }) => {
                return this.client.analytics.senviokApiEndpointsAnalyticsGetLogsEndpoint(
                    options?.skip ?? 0,
                    options?.take ?? 20,
                    options?.sortOrder ?? 'desc',
                    options?.channel,
                    options?.status,
                    options?.toAddress,
                    options?.fromAddress,
                    options?.subject,
                    options?.startDate,
                    options?.endDate
                );
            }
        };
    }

    public get webhooks() {
        return {
            create: (options: SenviokApiEndpointsWebhooksCreateWebhookRequest) => {
                return this.client.webhooks.senviokApiEndpointsWebhooksCreateWebhookEndpoint(options);
            },
            list: () => {
                return this.client.webhooks.senviokApiEndpointsWebhooksListWebhooksEndpoint();
            },
            delete: (id: string) => {
                return this.client.webhooks.senviokApiEndpointsWebhooksDeleteWebhookEndpoint(id);
            },
            logs: (webhookId: string) => {
                return this.client.webhooks.senviokApiEndpointsWebhooksGetWebhookDeliveriesEndpoint(webhookId);
            },
            verifySignature: (rawBody: string, signature: string, secret: string): boolean => {
                try {
                    const computed = createHmac('sha256', secret)
                        .update(rawBody)
                        .digest('hex');
                    return timingSafeEqual(
                        Buffer.from(computed),
                        Buffer.from(signature)
                    );
                } catch {
                    return false;
                }
            }
        };
    }

    public get templates() {
        return {
            create: (options: SenviokApiEndpointsTemplatesCreateTemplateRequest) => {
                return this.client.templates.senviokApiEndpointsTemplatesCreateTemplateEndpoint(options);
            },
            list: () => {
                return this.client.templates.senviokApiEndpointsTemplatesListTemplatesEndpoint();
            },
            get: (id: string) => {
                return this.client.templates.senviokApiEndpointsTemplatesGetTemplateEndpoint(id);
            },
            update: (id: string, options: SenviokApiEndpointsTemplatesUpdateTemplateRequest) => {
                return this.client.templates.senviokApiEndpointsTemplatesUpdateTemplateEndpoint(id, options);
            },
            delete: (id: string) => {
                return this.client.templates.senviokApiEndpointsTemplatesDeleteTemplateEndpoint(id);
            }
        };
    }

    public get domains() {
        return {
            create: (options: SenviokApiEndpointsDomainsCreateDomainRequest) => {
                return this.client.domains.senviokApiEndpointsDomainsCreateDomainEndpoint(options);
            },
            list: () => {
                return this.client.domains.senviokApiEndpointsDomainsListDomainsEndpoint();
            },
            getDkim: (id: string) => {
                return this.client.domains.senviokApiEndpointsDomainsGetDomainDkimEndpoint(id);
            },
            verify: (id: string) => {
                return this.client.domains.senviokApiEndpointsDomainsVerifyDomainEndpoint(id);
            }
        };
    }

    public get audiences() {
        return {
            create: (options: SenviokApiEndpointsAudiencesCreateAudienceRequest) => {
                return this.client.audiences.senviokApiEndpointsAudiencesCreateAudienceEndpoint(options);
            },
            list: () => {
                return this.client.audiences.senviokApiEndpointsAudiencesListAudiencesEndpoint();
            },
            delete: (id: string) => {
                return this.client.audiences.senviokApiEndpointsAudiencesDeleteAudienceEndpoint(id);
            }
        };
    }

    public get contacts() {
        return {
            create: (audienceId: string, options: SenviokApiEndpointsContactsCreateContactRequest) => {
                return this.client.audiences.senviokApiEndpointsContactsCreateContactEndpoint(audienceId, options);
            },
            list: (audienceId: string) => {
                return this.client.audiences.senviokApiEndpointsContactsListContactsEndpoint(audienceId);
            },
            delete: (audienceId: string, id: string) => {
                return this.client.audiences.senviokApiEndpointsContactsDeleteContactEndpoint(audienceId, id);
            }
        };
    }

    public get suppressions() {
        return {
            create: (options: SenviokApiEndpointsSuppressionsCreateSuppressionRequest) => {
                return this.client.suppressions.senviokApiEndpointsSuppressionsCreateSuppressionEndpoint(options);
            },
            list: () => {
                return this.client.suppressions.senviokApiEndpointsSuppressionsListSuppressionsEndpoint();
            },
            delete: (id: string) => {
                return this.client.suppressions.senviokApiEndpointsSuppressionsDeleteSuppressionEndpoint(id);
            }
        };
    }

    public get apiKeys() {
        return {
            create: (options: SenviokApiEndpointsApiKeysCreateApiKeyRequest) => {
                return this.client.apiKeys.senviokApiEndpointsApiKeysCreateApiKeyEndpoint(options);
            },
            list: () => {
                return this.client.apiKeys.senviokApiEndpointsApiKeysListApiKeysEndpoint();
            },
            delete: (id: string) => {
                return this.client.apiKeys.senviokApiEndpointsApiKeysDeleteApiKeyEndpoint(id);
            }
        };
    }
}

