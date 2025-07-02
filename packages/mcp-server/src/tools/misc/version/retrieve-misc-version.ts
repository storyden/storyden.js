// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'Storyden-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Storyden from 'Storyden';

export const metadata: Metadata = {
  resource: 'misc.version',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/version',
  operationId: 'GetVersion',
};

export const tool: Tool = {
  name: 'retrieve_misc_version',
  description:
    'The version number includes the date and time of the release build as\nwell as a short representation of the Git commit hash.\n',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Storyden, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.misc.version.retrieve());
};

export default { metadata, tool, handler };
