// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden, { toFile } from 'Storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource assets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.assets.create({
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.assets.create({
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
      content_fill_rule: 'replace',
      filename: 'filename',
      node_content_fill_target: 'cc5lnd2s1s4652adtu50',
    });
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.assets.retrieve('asset_filename', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });
});
