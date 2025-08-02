// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import * as EventsAPI from './events/events';
import { Stream } from '../streaming';

export class Datagraph extends APIResource {
  /**
   * Ask questions about the community's content.
   */
  askQuestion(
    query: DatagraphAskQuestionParams,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<DatagraphAskQuestionResponse>> {
    return this._client.get('/datagraph/ask', {
      query,
      ...options,
      headers: { Accept: 'text/event-stream', ...options?.headers },
      stream: true,
    }) as APIPromise<Stream<DatagraphAskQuestionResponse>>;
  }

  /**
   * Query and search content.
   */
  query(query: DatagraphQueryParams, options?: Core.RequestOptions): Core.APIPromise<DatagraphQueryResponse> {
    return this._client.get('/datagraph', { query, ...options });
  }
}

export type DatagraphAskQuestionResponse = string;

export interface DatagraphQueryResponse {
  current_page: number;

  items: Array<
    | Shared.DatagraphItemPost
    | DatagraphQueryResponse.DatagraphItemThread
    | Shared.DatagraphItemReply
    | Shared.DatagraphItemNode
    | Shared.DatagraphItemProfile
  >;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace DatagraphQueryResponse {
  export interface DatagraphItemThread {
    kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

    ref: EventsAPI.Thread;
  }
}

export interface DatagraphAskQuestionParams {
  /**
   * Search query string.
   */
  q: string;

  /**
   * If a follow-up question, the parent question ID.
   */
  parent_question_id?: string;
}

export interface DatagraphQueryParams {
  /**
   * Search query string.
   */
  q: string;

  /**
   * Datagraph item kind query.
   */
  kind?: Array<'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event'>;

  /**
   * Pagination query parameters.
   */
  page?: string;
}

export declare namespace Datagraph {
  export {
    type DatagraphAskQuestionResponse as DatagraphAskQuestionResponse,
    type DatagraphQueryResponse as DatagraphQueryResponse,
    type DatagraphAskQuestionParams as DatagraphAskQuestionParams,
    type DatagraphQueryParams as DatagraphQueryParams,
  };
}
