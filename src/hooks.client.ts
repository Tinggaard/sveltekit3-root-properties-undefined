import type { HandleClientError } from "@sveltejs/kit/hooks";

export const handleError: HandleClientError = (event) => {
  console.error(event)
}
