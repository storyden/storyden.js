// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource phone', () => {
  // skipped: tests are disabled for the time being
  test.skip('start: only required params', async () => {
    const responsePromise = client.auth.phone.start({
      identifier: 'southclaws',
      phone_number: 'phone_number',
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
  test.skip('start: required and optional params', async () => {
    const response = await client.auth.phone.start({
      identifier: 'southclaws',
      phone_number: 'phone_number',
      invitation_id: 'cc5lnd2s1s4652adtu50',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('verify: only required params', async () => {
    const responsePromise = client.auth.phone.verify('southclaws', { code: 'code' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('verify: required and optional params', async () => {
    const response = await client.auth.phone.verify('southclaws', { code: 'code' });
  });
});
