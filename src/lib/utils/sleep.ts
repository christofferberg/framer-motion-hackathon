/**
 * Sleep
 * @param ms - Milliseconds to timeout
 * @returns {Promise<void>}
 */
export function sleep(ms = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
