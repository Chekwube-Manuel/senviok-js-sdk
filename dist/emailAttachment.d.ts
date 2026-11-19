import type { SenviokApiEndpointsEmailsSendEmailAttachmentRequest } from './models/SenviokApiEndpointsEmailsSendEmailAttachmentRequest';
/** Creates an inline attachment from raw bytes and encodes them as base64. */
export declare function emailAttachmentFromBytes(filename: string, bytes: Uint8Array, contentType?: string, contentId?: string): SenviokApiEndpointsEmailsSendEmailAttachmentRequest;
