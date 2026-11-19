/**
 * Provide exactly one of content (base64) or path (public HTTPS URL).
 */
export type SenviokApiEndpointsEmailsSendEmailAttachmentRequest = {
    filename: string;
    contentType?: string | null;
    /**
     * Base64-encoded attachment bytes. Mutually exclusive with path.
     */
    content?: string | null;
    /**
     * Public HTTPS URL. Mutually exclusive with content.
     */
    path?: string | null;
    /**
     * Optional MIME content ID for inline images.
     */
    contentId?: string | null;
};
