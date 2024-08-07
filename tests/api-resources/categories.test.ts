// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource categories', () => {
  test('create: only required params', async () => {
    const responsePromise = client.categories.create({
      admin: true,
      colour: 'colour',
      description: 'description',
      name: 'name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.categories.create({
      admin: true,
      colour: 'colour',
      description: 'description',
      name: 'name',
      meta: { foo: 'bar' },
      slug: 'slug',
    });
  });

  test('update', async () => {
    const responsePromise = client.categories.update('cc5lnd2s1s4652adtu50');
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
    await expect(
      client.categories.update('cc5lnd2s1s4652adtu50', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.categories.update(
        'cc5lnd2s1s4652adtu50',
        {
          admin: true,
          colour: 'colour',
          description: 'description',
          meta: { foo: 'bar' },
          name: 'name',
          slug: 'slug',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.categories.list();
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
    await expect(client.categories.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Storyden.NotFoundError,
    );
  });
});
