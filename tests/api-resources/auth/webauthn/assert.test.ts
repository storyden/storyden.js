// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource assert', () => {
  // skipped: tests are disabled for the time being
  test.skip('complete: only required params', async () => {
    const responsePromise = client.auth.webauthn.assert.complete({
      id: 'id',
      rawId: 'rawId',
      response: { clientDataJSON: 'clientDataJSON' },
      type: 'type',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('complete: required and optional params', async () => {
    const response = await client.auth.webauthn.assert.complete({
      id: 'id',
      rawId: 'rawId',
      response: {
        clientDataJSON: 'clientDataJSON',
        attestationObject: 'attestationObject',
        authenticatorData: 'authenticatorData',
        signature: 'signature',
        transports: ['string'],
        userHandle: 'userHandle',
      },
      type: 'type',
      authenticatorAttachment: 'authenticatorAttachment',
      clientExtensionResults: {},
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('start', async () => {
    const responsePromise = client.auth.webauthn.assert.start('southclaws');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('start: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auth.webauthn.assert.start('southclaws', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });
});
