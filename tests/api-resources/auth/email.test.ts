// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource email', () => {
  // Prism tests are disabled
  test.skip('signin: only required params', async () => {
    const responsePromise = client.auth.email.signin({ email: 'hello@storyden.org' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('signin: required and optional params', async () => {
    const response = await client.auth.email.signin({ email: 'hello@storyden.org', handle: 'Southclaws' });
  });

  // Prism tests are disabled
  test.skip('signup: only required params', async () => {
    const responsePromise = client.auth.email.signup({ email: 'hello@storyden.org' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('signup: required and optional params', async () => {
    const response = await client.auth.email.signup({
      email: 'hello@storyden.org',
      invitation_id: 'cc5lnd2s1s4652adtu50',
      handle: 'Southclaws',
    });
  });

  // Prism tests are disabled
  test.skip('verify: only required params', async () => {
    const responsePromise = client.auth.email.verify({ code: '728562', email: 'hello@storyden.org' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('verify: required and optional params', async () => {
    const response = await client.auth.email.verify({ code: '728562', email: 'hello@storyden.org' });
  });
});
