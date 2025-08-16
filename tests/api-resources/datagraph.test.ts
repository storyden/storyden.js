// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource datagraph', () => {
  // Prism doesn't support text/event-stream responses
  test.skip('askQuestion: only required params', async () => {
    const responsePromise = client.datagraph.askQuestion({ q: 'q' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support text/event-stream responses
  test.skip('askQuestion: required and optional params', async () => {
    const response = await client.datagraph.askQuestion({ q: 'q', parent_question_id: 'parent_question_id' });
  });

  // Prism tests are disabled
  test.skip('query: only required params', async () => {
    const responsePromise = client.datagraph.query({ q: 'q' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('query: required and optional params', async () => {
    const response = await client.datagraph.query({ q: 'q', kind: ['post'], page: 'page' });
  });
});
