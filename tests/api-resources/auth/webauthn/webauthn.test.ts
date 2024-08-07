// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'Storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource webauthn', () => {
  test('make: only required params', async () => {
    const responsePromise = client.auth.webauthn.make({
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

  test('make: required and optional params', async () => {
    const response = await client.auth.webauthn.make({
      id: 'id',
      rawId: 'rawId',
      response: {
        clientDataJSON: 'clientDataJSON',
        attestationObject: 'attestationObject',
        transports: ['string', 'string', 'string'],
        authenticatorData: 'authenticatorData',
        signature: 'signature',
        userHandle: 'userHandle',
      },
      type: 'type',
      authenticatorAttachment: 'authenticatorAttachment',
      clientExtensionResults: {},
    });
  });
});
