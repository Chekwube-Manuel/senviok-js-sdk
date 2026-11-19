"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Senviok = exports.SenviokClient = void 0;
const crypto_1 = require("crypto");
const FetchHttpRequest_1 = require("./core/FetchHttpRequest");
const AdminService_1 = require("./services/AdminService");
const AnalyticsService_1 = require("./services/AnalyticsService");
const ApiKeysService_1 = require("./services/ApiKeysService");
const AudiencesService_1 = require("./services/AudiencesService");
const AuthService_1 = require("./services/AuthService");
const BillingService_1 = require("./services/BillingService");
const DefaultService_1 = require("./services/DefaultService");
const DomainsService_1 = require("./services/DomainsService");
const EmailsService_1 = require("./services/EmailsService");
const MessagesService_1 = require("./services/MessagesService");
const OtpService_1 = require("./services/OtpService");
const SenderEmailsService_1 = require("./services/SenderEmailsService");
const SmsService_1 = require("./services/SmsService");
const SuppressionsService_1 = require("./services/SuppressionsService");
const TemplatesService_1 = require("./services/TemplatesService");
const UnsubscribeService_1 = require("./services/UnsubscribeService");
const V1Service_1 = require("./services/V1Service");
const WaitlistService_1 = require("./services/WaitlistService");
const WebhooksService_1 = require("./services/WebhooksService");
class SenviokClient {
    constructor(config, HttpRequest = FetchHttpRequest_1.FetchHttpRequest) {
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
        this.admin = new AdminService_1.AdminService(this.request);
        this.analytics = new AnalyticsService_1.AnalyticsService(this.request);
        this.apiKeys = new ApiKeysService_1.ApiKeysService(this.request);
        this.audiences = new AudiencesService_1.AudiencesService(this.request);
        this.auth = new AuthService_1.AuthService(this.request);
        this.billing = new BillingService_1.BillingService(this.request);
        this.default = new DefaultService_1.DefaultService(this.request);
        this.domains = new DomainsService_1.DomainsService(this.request);
        this.emails = new EmailsService_1.EmailsService(this.request);
        this.messages = new MessagesService_1.MessagesService(this.request);
        this.otp = new OtpService_1.OtpService(this.request);
        this.senderEmails = new SenderEmailsService_1.SenderEmailsService(this.request);
        this.sms = new SmsService_1.SmsService(this.request);
        this.suppressions = new SuppressionsService_1.SuppressionsService(this.request);
        this.templates = new TemplatesService_1.TemplatesService(this.request);
        this.unsubscribe = new UnsubscribeService_1.UnsubscribeService(this.request);
        this.v1 = new V1Service_1.V1Service(this.request);
        this.waitlist = new WaitlistService_1.WaitlistService(this.request);
        this.webhooks = new WebhooksService_1.WebhooksService(this.request);
    }
}
exports.SenviokClient = SenviokClient;
class Senviok {
    constructor(apiKey, config) {
        this.client = new SenviokClient({
            TOKEN: apiKey,
            BASE: config?.BASE ?? 'https://api.senviok.live'
        });
    }
    get emails() {
        return {
            send: (options) => {
                return this.client.emails.senviokApiEndpointsEmailsSendEmailEndpoint(options);
            },
            uploadAttachment: (file) => {
                return this.client.emails.uploadEmailAttachmentEndpoint({ file });
            },
        };
    }
    get sms() {
        return {
            send: (options) => {
                return this.client.sms.senviokApiEndpointsSmsSendSmsEndpoint(options);
            }
        };
    }
    get whatsapp() {
        return {
            send: (options) => {
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
    get messages() {
        return {
            list: (options) => {
                return this.client.analytics.senviokApiEndpointsAnalyticsGetLogsEndpoint(options?.skip ?? 0, options?.take ?? 20, options?.sortOrder ?? 'desc', options?.channel, options?.status, options?.toAddress, options?.fromAddress, options?.subject, options?.startDate, options?.endDate);
            }
        };
    }
    get webhooks() {
        return {
            create: (options) => {
                return this.client.webhooks.senviokApiEndpointsWebhooksCreateWebhookEndpoint(options);
            },
            list: () => {
                return this.client.webhooks.senviokApiEndpointsWebhooksListWebhooksEndpoint();
            },
            delete: (id) => {
                return this.client.webhooks.senviokApiEndpointsWebhooksDeleteWebhookEndpoint(id);
            },
            logs: (webhookId) => {
                return this.client.webhooks.senviokApiEndpointsWebhooksGetWebhookDeliveriesEndpoint(webhookId);
            },
            verifySignature: (rawBody, signature, secret) => {
                try {
                    const computed = (0, crypto_1.createHmac)('sha256', secret)
                        .update(rawBody)
                        .digest('hex');
                    return (0, crypto_1.timingSafeEqual)(Buffer.from(computed), Buffer.from(signature));
                }
                catch {
                    return false;
                }
            }
        };
    }
    get templates() {
        return {
            create: (options) => {
                return this.client.templates.senviokApiEndpointsTemplatesCreateTemplateEndpoint(options);
            },
            list: () => {
                return this.client.templates.senviokApiEndpointsTemplatesListTemplatesEndpoint();
            },
            get: (id) => {
                return this.client.templates.senviokApiEndpointsTemplatesGetTemplateEndpoint(id);
            },
            update: (id, options) => {
                return this.client.templates.senviokApiEndpointsTemplatesUpdateTemplateEndpoint(id, options);
            },
            delete: (id) => {
                return this.client.templates.senviokApiEndpointsTemplatesDeleteTemplateEndpoint(id);
            }
        };
    }
    get domains() {
        return {
            create: (options) => {
                return this.client.domains.senviokApiEndpointsDomainsCreateDomainEndpoint(options);
            },
            list: () => {
                return this.client.domains.senviokApiEndpointsDomainsListDomainsEndpoint();
            },
            getDkim: (id) => {
                return this.client.domains.senviokApiEndpointsDomainsGetDomainDkimEndpoint(id);
            },
            verify: (id) => {
                return this.client.domains.senviokApiEndpointsDomainsVerifyDomainEndpoint(id);
            }
        };
    }
    get audiences() {
        return {
            create: (options) => {
                return this.client.audiences.senviokApiEndpointsAudiencesCreateAudienceEndpoint(options);
            },
            list: () => {
                return this.client.audiences.senviokApiEndpointsAudiencesListAudiencesEndpoint();
            },
            delete: (id) => {
                return this.client.audiences.senviokApiEndpointsAudiencesDeleteAudienceEndpoint(id);
            }
        };
    }
    get contacts() {
        return {
            create: (audienceId, options) => {
                return this.client.audiences.senviokApiEndpointsContactsCreateContactEndpoint(audienceId, options);
            },
            list: (audienceId) => {
                return this.client.audiences.senviokApiEndpointsContactsListContactsEndpoint(audienceId);
            },
            delete: (audienceId, id) => {
                return this.client.audiences.senviokApiEndpointsContactsDeleteContactEndpoint(audienceId, id);
            }
        };
    }
    get suppressions() {
        return {
            create: (options) => {
                return this.client.suppressions.senviokApiEndpointsSuppressionsCreateSuppressionEndpoint(options);
            },
            list: () => {
                return this.client.suppressions.senviokApiEndpointsSuppressionsListSuppressionsEndpoint();
            },
            delete: (id) => {
                return this.client.suppressions.senviokApiEndpointsSuppressionsDeleteSuppressionEndpoint(id);
            }
        };
    }
    get apiKeys() {
        return {
            create: (options) => {
                return this.client.apiKeys.senviokApiEndpointsApiKeysCreateApiKeyEndpoint(options);
            },
            list: () => {
                return this.client.apiKeys.senviokApiEndpointsApiKeysListApiKeysEndpoint();
            },
            delete: (id) => {
                return this.client.apiKeys.senviokApiEndpointsApiKeysDeleteApiKeyEndpoint(id);
            }
        };
    }
}
exports.Senviok = Senviok;
