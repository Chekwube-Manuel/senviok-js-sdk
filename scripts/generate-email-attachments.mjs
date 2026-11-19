import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const localSpec = resolve(root, '../../Senviok-server/docs/openapi.json');
const spec = process.env.SENVIOK_OPENAPI_SPEC || (existsSync(localSpec)
  ? localSpec
  : 'https://api.senviok.live/swagger/v1/swagger.json');
const output = mkdtempSync(join(tmpdir(), 'senviok-openapi-'));

try {
  const result = spawnSync('npx', [
    'openapi-typescript-codegen', '-i', spec, '-o', output, '-c', 'fetch', '--name', 'SenviokClient',
  ], { cwd: root, stdio: 'inherit', shell: process.platform === 'win32' });
  if (result.status !== 0) throw new Error(`OpenAPI code generation failed with exit code ${result.status}`);

  const generatedFiles = [
    'models/SenviokApiEndpointsEmailsSendEmailRequest.ts',
    'models/SenviokApiEndpointsEmailsSendEmailAttachmentRequest.ts',
    'models/UploadedEmailAttachment.ts',
    'services/EmailsService.ts',
  ];
  for (const relative of generatedFiles) {
    const source = join(output, relative);
    if (!existsSync(source)) throw new Error(`OpenAPI spec did not generate ${relative}`);
    copyFileSync(source, join(root, 'src', relative));
  }
} finally {
  rmSync(output, { recursive: true, force: true });
}

console.log(`Generated email attachment API types from ${spec}`);
