// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const storyden = new Storyden({
  storydenSession: 'My Storyden Session',
  storydenWebauthnSession: 'My Storyden Webauthn Session',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assert', () => {
  test('create: only required params', async () => {
    const responsePromise = storyden.auth.webauthn.assert.create({
      id: 'string',
      rawId: 'string',
      response: { clientDataJSON: 'string' },
      type: 'string',
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
    const response = await storyden.auth.webauthn.assert.create({
      id: 'string',
      rawId: 'string',
      response: {
        clientDataJSON: 'string',
        attestationObject: 'string',
        transports: ['string', 'string', 'string'],
        authenticatorData: 'string',
        signature: 'string',
        userHandle: 'string',
      },
      type: 'string',
      authenticatorAttachment: 'string',
      clientExtensionResults: {},
    });
  });

  test('retrieve', async () => {
    const responsePromise = storyden.auth.webauthn.assert.retrieve('southclaws');
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
      storyden.auth.webauthn.assert.retrieve('southclaws', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });
});
