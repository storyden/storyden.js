// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource phone', () => {
  test('complete: only required params', async () => {
    const responsePromise = client.auth.phone.complete('southclaws', { code: 'code' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('complete: required and optional params', async () => {
    const response = await client.auth.phone.complete('southclaws', { code: 'code' });
  });

  test('start: only required params', async () => {
    const responsePromise = client.auth.phone.start({
      identifier: 'southclaws',
      phone_number: 'phone_number',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('start: required and optional params', async () => {
    const response = await client.auth.phone.start({
      identifier: 'southclaws',
      phone_number: 'phone_number',
    });
  });
});
