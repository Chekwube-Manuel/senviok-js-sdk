export type SenviokApiEndpointsEmailsSendEmailRequest = {
    from?: string;
    fromName?: string | null;
    to?: any;
    subject?: string;
    html?: string | null;
    text?: string | null;
    cc?: any;
    bcc?: any;
    replyTo?: any;
    templateId?: string | null;
    templateData?: Record<string, string> | null;
    addUnsubscribeFooter?: boolean | null;
    addListUnsubscribeHeader?: boolean | null;
};
