import "whatwg-fetch";
import {getBaseUrl} from "./baseApi";

const baseUrl = getBaseUrl();

export function getUsers() {

  return get("users");

}
export function deleteUser(id) {
  return del(`users/${id}`);
}

function del(url) {
  const request = new Request(baseUrl + url, {method: 'DELETE'});
  return fetch(request).then(OnSuccess, onError)
}

function get(url) {
  return fetch(baseUrl + url).then(OnSuccess, onError);
}
function OnSuccess(response) {
  return response.json();
}

function onError(err) {
  console.log(err);
}
