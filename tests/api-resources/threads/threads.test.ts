// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource threads', () => {
  test('create: only required params', async () => {
    const responsePromise = client.threads.create({
      body: 'body',
      category: 'cc5lnd2s1s4652adtu50',
      title: 'Hello world!',
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

  test('create: required and optional params', async () => {
    const response = await client.threads.create({
      body: 'body',
      category: 'cc5lnd2s1s4652adtu50',
      title: 'Hello world!',
      visibility: 'draft',
      meta: { foo: 'bar' },
      tags: ['cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50'],
      url: 'url',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.threads.retrieve('cc5lnd2s1s4652adtu50-top-10-movies-thread');
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
      client.threads.retrieve('cc5lnd2s1s4652adtu50-top-10-movies-thread', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.threads.update('cc5lnd2s1s4652adtu50-top-10-movies-thread');
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
      client.threads.update('cc5lnd2s1s4652adtu50-top-10-movies-thread', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.threads.update(
        'cc5lnd2s1s4652adtu50-top-10-movies-thread',
        {
          body: 'body',
          category: 'cc5lnd2s1s4652adtu50',
          meta: { foo: 'bar' },
          tags: ['cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50'],
          title: 'Hello world!',
          url: 'url',
          visibility: 'draft',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.threads.list();
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
    await expect(client.threads.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Storyden.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.threads.list(
        {
          author: 'Southclaws',
          categories: ['string', 'string', 'string'],
          page: 'page',
          q: 'q',
          tags: ['cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.threads.delete('cc5lnd2s1s4652adtu50-top-10-movies-thread');
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
      client.threads.delete('cc5lnd2s1s4652adtu50-top-10-movies-thread', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });
});
