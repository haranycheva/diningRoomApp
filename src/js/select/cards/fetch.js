const BASE__URL = "http://localhost:3000/";

export async function fetchTheCards(filter) {
  let url = `${BASE__URL}${filter}`;
  return fetch(url).then(res => res.json());
}