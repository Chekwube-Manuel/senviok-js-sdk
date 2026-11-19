export type UploadedEmailAttachment = {
    id: string;
    filename: string;
    contentType: string;
    sizeBytes: number;
    bucket: string;
    key: string;
};
