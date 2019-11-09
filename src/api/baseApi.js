/**
 * Created by Venkat on 11/9/2019.
 */

export function getBaseUrl() {
  const isDevelopment = window.location.hostname === 'localhost';
  return isDevelopment ? 'http://localhost:3000/' : '/';
}
