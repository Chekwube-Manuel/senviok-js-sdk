/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsEmailsSendEmailAttachmentRequest } from './SenviokApiEndpointsEmailsSendEmailAttachmentRequest';
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
    attachments?: Array<SenviokApiEndpointsEmailsSendEmailAttachmentRequest> | null;
    attachmentIds?: Array<string> | null;
};

