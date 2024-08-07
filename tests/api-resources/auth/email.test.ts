// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource email', () => {
  test('signin: only required params', async () => {
    const responsePromise = client.auth.email.signin({ email: 'hello@storyden.org' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('signin: required and optional params', async () => {
    const response = await client.auth.email.signin({ email: 'hello@storyden.org', handle: 'Southclaws' });
  });

  test('signup: only required params', async () => {
    const responsePromise = client.auth.email.signup({ email: 'hello@storyden.org' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('signup: required and optional params', async () => {
    const response = await client.auth.email.signup({ email: 'hello@storyden.org', handle: 'Southclaws' });
  });

  test('verify: only required params', async () => {
    const responsePromise = client.auth.email.verify({ code: '728562', email: 'email' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('verify: required and optional params', async () => {
    const response = await client.auth.email.verify({ code: '728562', email: 'email' });
  });
});
