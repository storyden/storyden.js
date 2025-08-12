// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Storyden from 'storyden';
import { Response } from 'node-fetch';

const client = new Storyden({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource events', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.events.create({
      content: 'content',
      name: 'Friday beers, coding and design hack night',
      participation_policy: 'open',
      thread_category_id: 'cc5lnd2s1s4652adtu50',
      time_range: { end: '2019-12-27T18:11:19.117Z', start: '2019-12-27T18:11:19.117Z' },
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.events.create({
      content: 'content',
      name: 'Friday beers, coding and design hack night',
      participation_policy: 'open',
      thread_category_id: 'cc5lnd2s1s4652adtu50',
      time_range: { end: '2019-12-27T18:11:19.117Z', start: '2019-12-27T18:11:19.117Z' },
      visibility: 'draft',
      capacity: 0,
      description: 'Join us for a night of coding, design and beers!',
      location: {
        location_type: 'physical',
        name: 'name',
        address: 'address',
        latitude: 0,
        longitude: 0,
        url: 'url',
      },
      meta: { foo: 'bar' },
      primary_image_asset_id: 'cc5lnd2s1s4652adtu50',
      slug: 'friday-beers-coding-design-hack-night',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.events.retrieve('cc5lnd2s1s4652adtu50-top-10-movies-thread');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.events.retrieve('cc5lnd2s1s4652adtu50-top-10-movies-thread', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.events.update('cc5lnd2s1s4652adtu50-top-10-movies-thread');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.events.update('cc5lnd2s1s4652adtu50-top-10-movies-thread', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.events.update(
        'cc5lnd2s1s4652adtu50-top-10-movies-thread',
        {
          capacity: 0,
          content: 'content',
          description: 'Join us for a night of coding, design and beers!',
          location: {
            location_type: 'physical',
            name: 'name',
            address: 'address',
            latitude: 0,
            longitude: 0,
            url: 'url',
          },
          meta: { foo: 'bar' },
          name: 'Friday beers, coding and design hack night',
          participation_policy: 'open',
          primary_image_asset_id: 'cc5lnd2s1s4652adtu50',
          slug: 'friday-beers-coding-design-hack-night',
          time_range: { end: '2019-12-27T18:11:19.117Z', start: '2019-12-27T18:11:19.117Z' },
          visibility: 'draft',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.events.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.events.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Storyden.NotFoundError,
    );
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.events.list({ page: 'page', q: 'q' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.events.delete('cc5lnd2s1s4652adtu50-top-10-movies-thread');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.events.delete('cc5lnd2s1s4652adtu50-top-10-movies-thread', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Storyden.NotFoundError);
  });
});
