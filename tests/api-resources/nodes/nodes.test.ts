// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource nodes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.nodes.create({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.nodes.create({
      name: 'name',
      asset_ids: ['cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50'],
      asset_sources: ['string', 'string', 'string'],
      content: 'content',
      meta: { foo: 'bar' },
      parent: 'parent',
      slug: 'slug',
      url: 'url',
      visibility: 'draft',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.nodes.retrieve('cc5lnd2s1s4652adtu50');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.nodes.retrieve('cc5lnd2s1s4652adtu50', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.nodes.update('cc5lnd2s1s4652adtu50');
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
      client.nodes.update('cc5lnd2s1s4652adtu50', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.nodes.update(
        'cc5lnd2s1s4652adtu50',
        {
          asset_ids: ['cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50'],
          asset_sources: ['string', 'string', 'string'],
          content: 'content',
          meta: { foo: 'bar' },
          name: 'name',
          parent: 'parent',
          slug: 'slug',
          url: 'url',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.nodes.list();
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
    await expect(client.nodes.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Storyden.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.nodes.list(
        {
          author: 'Southclaws',
          depth: 'depth',
          node_id: 'cc5lnd2s1s4652adtu50',
          page: 'page',
          q: 'q',
          visibility: ['draft', 'unlisted', 'review'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.nodes.delete('cc5lnd2s1s4652adtu50');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.nodes.delete('cc5lnd2s1s4652adtu50', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.nodes.delete(
        'cc5lnd2s1s4652adtu50',
        { target_node: 'target_node' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Storyden.NotFoundError);
  });
});
