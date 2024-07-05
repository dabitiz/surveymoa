import { writable } from "svelte/store";

export const username = writable("");
export const avatar_url = writable("");
export const gender = writable("");
export const year_of_birth = writable(2000);
export const rating = writable(0);

const property_map_obj = {
	username,
	avatar_url,
	gender,
	year_of_birth,
	rating
};

/**
 * store 업데이트
 * @param {*} key
 * @param {*} val
 */
export const update_profiles_store = (key, val) => {
	const property_to_update = property_map_obj[key];

	if (property_to_update) {
		property_to_update.set(val);
	}
};
