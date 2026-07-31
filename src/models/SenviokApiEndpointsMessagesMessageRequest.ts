/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SenviokApiEndpointsMessagesMessageAttachment } from './SenviokApiEndpointsMessagesMessageAttachment';
import type { SenviokApiEndpointsMessagesMessageContent } from './SenviokApiEndpointsMessagesMessageContent';
import type { SenviokApiEndpointsMessagesSmsOptions } from './SenviokApiEndpointsMessagesSmsOptions';
export type SenviokApiEndpointsMessagesMessageRequest = {
    channel?: string;
    to?: Array<string>;
    sender?: string | null;
    subject?: string | null;
    content?: SenviokApiEndpointsMessagesMessageContent | null;
    attachments?: Array<SenviokApiEndpointsMessagesMessageAttachment> | null;
    templateId?: string | null;
    templateData?: Record<string, string> | null;
    addUnsubscribeFooter?: boolean | null;
    addListUnsubscribeHeader?: boolean | null;
    smsOptions?: SenviokApiEndpointsMessagesSmsOptions | null;
    metadata?: Record<string, string> | null;
};

