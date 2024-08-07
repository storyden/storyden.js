// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden, { toFile } from 'Storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource avatar', () => {
  test('create: only required params', async () => {
    const responsePromise = client.accounts.self.avatar.create(
      await toFile(Buffer.from('# my file contents'), 'README.md'),
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.accounts.self.avatar.create(
      await toFile(Buffer.from('# my file contents'), 'README.md'),
    );
  });
});
