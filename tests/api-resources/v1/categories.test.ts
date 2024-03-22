// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const storyden = new Storyden({
  storydenSession: 'My Storyden Session',
  storydenWebauthnSession: 'My Storyden Webauthn Session',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource categories', () => {
  test('create: only required params', async () => {
    const responsePromise = storyden.v1.categories.create({
      admin: true,
      colour: 'string',
      description: 'string',
      name: 'string',
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
    const response = await storyden.v1.categories.create({
      admin: true,
      colour: 'string',
      description: 'string',
      name: 'string',
      meta: { foo: 'bar' },
      slug: 'string',
    });
  });
});
