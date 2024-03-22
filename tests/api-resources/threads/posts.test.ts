// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const storyden = new Storyden({
  storydenSession: 'My Storyden Session',
  storydenWebauthnSession: 'My Storyden Webauthn Session',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource posts', () => {
  test('create: only required params', async () => {
    const responsePromise = storyden.threads.posts.create('cc5lnd2s1s4652adtu50-top-10-movies-thread', {
      body: 'string',
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
    const response = await storyden.threads.posts.create('cc5lnd2s1s4652adtu50-top-10-movies-thread', {
      body: 'string',
      meta: { foo: 'bar' },
      reply_to: 'cc5lnd2s1s4652adtu50',
      url: 'string',
    });
  });
});
