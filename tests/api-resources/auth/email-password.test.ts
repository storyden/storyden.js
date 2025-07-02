// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource emailPassword', () => {
  // skipped: tests are disabled for the time being
  test.skip('requestReset: only required params', async () => {
    const responsePromise = client.auth.emailPassword.requestReset({
      email: 'hello@storyden.org',
      token_url: { query: 'query', url: 'url' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('requestReset: required and optional params', async () => {
    const response = await client.auth.emailPassword.requestReset({
      email: 'hello@storyden.org',
      token_url: { query: 'query', url: 'url' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('signin: only required params', async () => {
    const responsePromise = client.auth.emailPassword.signin({
      email: 'hello@storyden.org',
      password: 'password',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('signin: required and optional params', async () => {
    const response = await client.auth.emailPassword.signin({
      email: 'hello@storyden.org',
      password: 'password',
      handle: 'Southclaws',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('signup: only required params', async () => {
    const responsePromise = client.auth.emailPassword.signup({
      email: 'hello@storyden.org',
      password: 'password',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('signup: required and optional params', async () => {
    const response = await client.auth.emailPassword.signup({
      email: 'hello@storyden.org',
      password: 'password',
      invitation_id: 'cc5lnd2s1s4652adtu50',
      handle: 'Southclaws',
    });
  });
});
