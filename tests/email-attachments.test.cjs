const assert = require('node:assert/strict');
const http = require('node:http');
const { after, before, test } = require('node:test');
const { emailAttachmentFromBytes, Senviok } = require('../dist');

let server;
let baseUrl;
const requests = [];

before(async () => {
  server = http.createServer((req, res) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const body = Buffer.concat(chunks);
      requests.push({ method: req.method, url: req.url, headers: req.headers, body });
      res.setHeader('content-type', 'application/json');
      if (req.url === '/v1/emails/attachments') {
        res.end(JSON.stringify({ id: 'att_test_1', filename: 'invoice.pdf', contentType: 'application/pdf', sizeBytes: 3, bucket: 'test', key: 'test/1' }));
      } else {
        res.end(JSON.stringify({ id: 'msg_test_1' }));
      }
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  if (server) await new Promise((resolve, reject) => server.close(err => err ? reject(err) : resolve()));
});

test('uploads bytes then sends the returned attachment ID', async () => {
  const client = new Senviok('svk_test_key', { BASE: baseUrl });
  const uploaded = await client.emails.uploadAttachment(
    new Blob([Buffer.from([1, 2, 3])], { type: 'application/pdf' }),
  );
  assert.equal(uploaded.id, 'att_test_1');

  const message = await client.emails.send({
    from: 'billing@example.com',
    to: 'customer@example.com',
    subject: 'Invoice',
    attachmentIds: [uploaded.id],
  });
  assert.equal(message.id, 'msg_test_1');
  assert.equal(requests.length, 2);
  assert.equal(requests[0].url, '/v1/emails/attachments');
  assert.match(requests[0].headers['content-type'], /^multipart\/form-data; boundary=/);
  assert.match(requests[0].body.toString(), /name="file"/);
  assert.equal(requests[1].url, '/v1/emails');
  assert.deepEqual(JSON.parse(requests[1].body.toString()).attachmentIds, ['att_test_1']);
  assert.equal(requests[0].headers.authorization, 'Bearer svk_test_key');
  assert.equal(requests[1].headers.authorization, 'Bearer svk_test_key');
});

test('encodes in-memory bytes to base64 for inline attachments', () => {
  const item = emailAttachmentFromBytes('note.txt', new Uint8Array([1, 2, 3]), 'text/plain');
  assert.deepEqual(item, { filename: 'note.txt', content: 'AQID', contentType: 'text/plain', contentId: undefined });
});
