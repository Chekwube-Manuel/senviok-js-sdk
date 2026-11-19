# Senviok JavaScript SDK

The official TypeScript/JavaScript client for the Senviok API.

```ts
import { readFile } from "node:fs/promises";
import { emailAttachmentFromBytes, Senviok } from "senviok";

const senviok = new Senviok(process.env.SENVIOK_API_KEY!);
const pdfBytes = await readFile("invoice.pdf");
await senviok.emails.send({
  from: "billing@example.com",
  to: "customer@example.com",
  subject: "Your invoice",
  text: "Your invoice is attached.",
  attachments: [emailAttachmentFromBytes("invoice.pdf", pdfBytes, "application/pdf")],
});
```

Each attachment must provide exactly one of `content` (base64 file bytes) or `path` (a public HTTPS URL). Optional fields are `contentType` and `contentId` for inline CID images. For larger files, upload multipart field `file` to `POST /v1/emails/attachments` and pass the returned IDs in `attachmentIds`. The API allows up to 10 files and 10 MB total per email.

```ts
const pdfBytes = await readFile("invoice.pdf");
const file = new Blob([pdfBytes], { type: "application/pdf" });
const uploaded = await senviok.emails.uploadAttachment(file);
await senviok.emails.send({
  from: "billing@example.com", to: "customer@example.com",
  subject: "Your invoice", attachmentIds: [uploaded.id],
});
```
