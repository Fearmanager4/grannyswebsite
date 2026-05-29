/**
 * Server entry point for TanStack Start SSR
 * This file handles server-side rendering and API routes
 */

export default {
  async fetch(request: Request) {
    return new Response('Server is running', { status: 200 })
  },
}
