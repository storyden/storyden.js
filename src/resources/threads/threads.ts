// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PostsAPI from './posts';
import { Posts } from './posts';

export class Threads extends APIResource {
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
}

Threads.Posts = Posts;

export declare namespace Threads {
  export { Posts as Posts };
}
