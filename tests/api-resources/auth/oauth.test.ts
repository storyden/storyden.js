// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource oauth', () => {
  // skipped: tests are disabled for the time being
  test.skip('callback: only required params', async () => {
    const responsePromise = client.auth.oauth.callback('twitter', { code: 'code', state: 'state' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('callback: required and optional params', async () => {
    const response = await client.auth.oauth.callback('twitter', { code: 'code', state: 'state' });
  });
});
