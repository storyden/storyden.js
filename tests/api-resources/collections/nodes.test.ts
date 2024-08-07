// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource nodes', () => {
  test('add', async () => {
    const responsePromise = client.collections.nodes.add('cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('add: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.collections.nodes.add('cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('remove', async () => {
    const responsePromise = client.collections.nodes.remove('cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('remove: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.collections.nodes.remove('cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });
});
