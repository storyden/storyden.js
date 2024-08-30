// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as NodesAPI from './nodes';
import * as PostsAPI from './posts';

export class Collections extends APIResource {
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
  nodes: NodesAPI.Nodes = new NodesAPI.Nodes(this._client);
}

export namespace Collections {
  export import Posts = PostsAPI.Posts;
  export import Nodes = NodesAPI.Nodes;
}
