import { writable } from "svelte/store";

export const loading = writable(false);

const property_map_obj = {
	loading
};

/**
 * store 업데이트
 * @param {*} key
 * @param {*} val
 */
export const update_global_store = (key, val) => {
	const property_to_update = property_map_obj[key];

	if (property_to_update) {
		property_to_update.set(val);
	}
};
