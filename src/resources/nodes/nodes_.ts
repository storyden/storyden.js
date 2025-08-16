// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Nodes extends APIResource {
  /**
   * Remove a node from its parent node and back to the top level.
   *
   * @example
   * ```ts
   * const commonProperties =
   *   await client.nodes.nodes.removeChild(
   *     'cc5lnd2s1s4652adtu50',
   *     'cc5lnd2s1s4652adtu50',
   *   );
   * ```
   */
  removeChild(
    nodeSlug: string,
    nodeSlugChild: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.CommonProperties> {
    return this._client.delete(`/nodes/${nodeSlug}/nodes/${nodeSlugChild}`, options);
  }

  /**
   * Set a node's parent to the specified node
   *
   * @example
   * ```ts
   * const commonProperties = await client.nodes.nodes.setParent(
   *   'cc5lnd2s1s4652adtu50',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  setParent(
    nodeSlug: string,
    nodeSlugChild: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.CommonProperties> {
    return this._client.put(`/nodes/${nodeSlug}/nodes/${nodeSlugChild}`, options);
  }
}
