// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const storyden = new Storyden({
  storydenSession: 'My Storyden Session',
  storydenWebauthnSession: 'My Storyden Webauthn Session',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource clusters', () => {
  test('create: only required params', async () => {
    const responsePromise = storyden.clusters.create({
      description: 'string',
      name: 'string',
      slug: 'string',
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
    const response = await storyden.clusters.create({
      description: 'string',
      name: 'string',
      slug: 'string',
      asset_ids: ['cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50'],
      content: 'string',
      parent: 'string',
      properties: { foo: 'bar' },
      url: 'string',
      visibility: 'draft',
    });
  });

  test('retrieve', async () => {
    const responsePromise = storyden.clusters.retrieve('cc5lnd2s1s4652adtu50');
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
      storyden.clusters.retrieve('cc5lnd2s1s4652adtu50', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = storyden.clusters.update('cc5lnd2s1s4652adtu50');
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
      storyden.clusters.update('cc5lnd2s1s4652adtu50', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      storyden.clusters.update(
        'cc5lnd2s1s4652adtu50',
        {
          asset_ids: ['cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50'],
          content: 'string',
          description: 'string',
          name: 'string',
          parent: 'string',
          properties: { foo: 'bar' },
          slug: 'string',
          url: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = storyden.clusters.list();
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
    await expect(storyden.clusters.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Storyden.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      storyden.clusters.list(
        {
          author: 'Southclaws',
          cluster_id: 'cc5lnd2s1s4652adtu50',
          page: 'string',
          q: 'string',
          visibility: ['draft', 'review', 'published'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('remove', async () => {
    const responsePromise = storyden.clusters.remove('cc5lnd2s1s4652adtu50');
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
      storyden.clusters.remove('cc5lnd2s1s4652adtu50', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('remove: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      storyden.clusters.remove(
        'cc5lnd2s1s4652adtu50',
        { move_child_clusters: true, move_child_items: true, target_cluster: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('visibilityUpdate: only required params', async () => {
    const responsePromise = storyden.clusters.visibilityUpdate('cc5lnd2s1s4652adtu50', {
      visibility: 'draft',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('visibilityUpdate: required and optional params', async () => {
    const response = await storyden.clusters.visibilityUpdate('cc5lnd2s1s4652adtu50', {
      visibility: 'draft',
    });
  });
});
