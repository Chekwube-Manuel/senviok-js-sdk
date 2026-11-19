"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailAttachmentFromBytes = emailAttachmentFromBytes;
/** Creates an inline attachment from raw bytes and encodes them as base64. */
function emailAttachmentFromBytes(filename, bytes, contentType, contentId) {
    const content = typeof Buffer !== 'undefined'
        ? Buffer.from(bytes).toString('base64')
        : bytesToBase64(bytes);
    return { filename, content, contentType, contentId };
}
function bytesToBase64(bytes) {
    let binary = '';
    const chunkSize = 0x8000;
    for (let offset = 0; offset < bytes.length; offset += chunkSize) {
        binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
    }
    return btoa(binary);
}
