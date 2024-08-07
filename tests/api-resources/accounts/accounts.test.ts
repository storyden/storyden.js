// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource accounts', () => {
  test('update', async () => {
    const responsePromise = client.accounts.update();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.accounts.update({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Storyden.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.update(
        {
          bio: '<body><p>hi, my name is</p><p>southclaws</p></body>',
          handle: 'Southclaws',
          interests: ['cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50'],
          links: [
            { text: 'text', url: 'url' },
            { text: 'text', url: 'url' },
            { text: 'text', url: 'url' },
          ],
          meta: { foo: 'bar' },
          name: 'Barnaby Keene',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.accounts.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.accounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Storyden.NotFoundError,
    );
  });
});
