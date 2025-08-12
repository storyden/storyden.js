// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource password', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.auth.password.update({ new: 'password456', old: 'password123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.auth.password.update({ new: 'password456', old: 'password123' });
  });

  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.auth.password.add({ password: 'password123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('add: required and optional params', async () => {
    const response = await client.auth.password.add({ password: 'password123' });
  });

  // Prism tests are disabled
  test.skip('reset: only required params', async () => {
    const responsePromise = client.auth.password.reset({ token: 'token', new: 'password456' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('reset: required and optional params', async () => {
    const response = await client.auth.password.reset({ token: 'token', new: 'password456' });
  });

  // Prism tests are disabled
  test.skip('signin: only required params', async () => {
    const responsePromise = client.auth.password.signin({ token: 'password', identifier: 'odin' });
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
    const response = await client.auth.password.signin({ token: 'password', identifier: 'odin' });
  });

  // Prism tests are disabled
  test.skip('signup: only required params', async () => {
    const responsePromise = client.auth.password.signup({ token: 'password', identifier: 'odin' });
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
    const response = await client.auth.password.signup({
      token: 'password',
      identifier: 'odin',
      invitation_id: 'cc5lnd2s1s4652adtu50',
    });
  });
});
