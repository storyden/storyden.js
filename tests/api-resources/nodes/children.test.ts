// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource children', () => {
  test('removeParent', async () => {
    const responsePromise = client.nodes.children.removeParent(
      'cc5lnd2s1s4652adtu50',
      'cc5lnd2s1s4652adtu50',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeParent: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.nodes.children.removeParent('cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('setParent', async () => {
    const responsePromise = client.nodes.children.setParent('cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setParent: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.nodes.children.setParent('cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });
});
