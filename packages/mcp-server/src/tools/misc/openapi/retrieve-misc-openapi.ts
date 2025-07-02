// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'Storyden-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Storyden from 'Storyden';

export const metadata: Metadata = {
  resource: 'misc.openapi',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/openapi.json',
  operationId: 'GetSpec',
};

export const tool: Tool = {
  name: 'retrieve_misc_openapi',
  description:
    'This endpoint returns the OpenAPI specification for the Storyden API in\nJSON format. This is useful for clients that want to dynamically load\nthe API specification for documentation or code generation.\n',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Storyden, args: Record<string, unknown> | undefined) => {
  return asTextContentResult((await client.misc.openAPI.retrieve()) as object);
};

export default { metadata, tool, handler };
