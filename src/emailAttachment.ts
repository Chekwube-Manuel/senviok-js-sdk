import type { SenviokApiEndpointsEmailsSendEmailAttachmentRequest } from './models/SenviokApiEndpointsEmailsSendEmailAttachmentRequest';

/** Creates an inline attachment from raw bytes and encodes them as base64. */
export function emailAttachmentFromBytes(
    filename: string,
    bytes: Uint8Array,
    contentType?: string,
    contentId?: string,
): SenviokApiEndpointsEmailsSendEmailAttachmentRequest {
    const content = typeof Buffer !== 'undefined'
        ? Buffer.from(bytes).toString('base64')
        : bytesToBase64(bytes);
    return { filename, content, contentType, contentId };
}

function bytesToBase64(bytes: Uint8Array): string {
    let binary = '';
    const chunkSize = 0x8000;
    for (let offset = 0; offset < bytes.length; offset += chunkSize) {
        binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
    }
    return btoa(binary);
}
