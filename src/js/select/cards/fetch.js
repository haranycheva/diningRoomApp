// const BASE__URL = "http://localhost:3000/";
const BASE__URL = "https://6532d346d80bd20280f615b7.mockapi.io/contacts";

export async function fetchTheCards(filter) {
  let url = `${BASE__URL}`;
  return fetch(url).then(res => res.json()).then(res => res[0].papa[0][filter]);
}