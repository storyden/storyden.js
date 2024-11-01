// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as NodesAPI from './nodes';
import { Nodes } from './nodes';
import * as PostsAPI from './posts';
import { Posts } from './posts';

export class Collections extends APIResource {
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
  nodes: NodesAPI.Nodes = new NodesAPI.Nodes(this._client);
}

Collections.Posts = Posts;
Collections.Nodes = Nodes;

export declare namespace Collections {
  export { Posts as Posts };

  export { Nodes as Nodes };
}
