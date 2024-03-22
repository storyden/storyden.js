// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const storyden = new Storyden({
  storydenSession: 'My Storyden Session',
  storydenWebauthnSession: 'My Storyden Webauthn Session',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource threads', () => {
  test('create: only required params', async () => {
    const responsePromise = storyden.threads.create({
      body: 'string',
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
    const response = await storyden.threads.create({
      body: 'string',
      category: 'cc5lnd2s1s4652adtu50',
      title: 'Hello world!',
      visibility: 'draft',
      meta: { foo: 'bar' },
      tags: ['cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50'],
      url: 'string',
    });
  });

  test('list', async () => {
    const responsePromise = storyden.threads.list();
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
    await expect(storyden.threads.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Storyden.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      storyden.threads.list(
        {
          author: 'Southclaws',
          categories: ['string', 'string', 'string'],
          page: 'string',
          q: 'string',
          tags: ['cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('archive', async () => {
    const responsePromise = storyden.threads.archive('cc5lnd2s1s4652adtu50-top-10-movies-thread');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      storyden.threads.archive('cc5lnd2s1s4652adtu50-top-10-movies-thread', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('publishChanges', async () => {
    const responsePromise = storyden.threads.publishChanges('cc5lnd2s1s4652adtu50-top-10-movies-thread');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('publishChanges: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      storyden.threads.publishChanges('cc5lnd2s1s4652adtu50-top-10-movies-thread', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('publishChanges: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      storyden.threads.publishChanges(
        'cc5lnd2s1s4652adtu50-top-10-movies-thread',
        {
          body: 'string',
          category: 'cc5lnd2s1s4652adtu50',
          meta: { foo: 'bar' },
          tags: ['cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50', 'cc5lnd2s1s4652adtu50'],
          title: 'Hello world!',
          url: 'string',
          visibility: 'draft',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  test('retrieveInformation', async () => {
    const responsePromise = storyden.threads.retrieveInformation('cc5lnd2s1s4652adtu50-top-10-movies-thread');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveInformation: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      storyden.threads.retrieveInformation('cc5lnd2s1s4652adtu50-top-10-movies-thread', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });
});
