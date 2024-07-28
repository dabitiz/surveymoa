import { w as writable } from "./index2.js";
const username = writable("");
const avatar_url = writable("");
const gender = writable("");
const year_of_birth = writable("2000-09-20");
const point = writable(0);
const rating = writable(0);
export {
  avatar_url as a,
  gender as g,
  point as p,
  rating as r,
  username as u,
  year_of_birth as y
};
