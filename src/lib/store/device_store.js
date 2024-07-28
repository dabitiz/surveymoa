import { writable } from "svelte/store";

export const operating_system = writable("");
export const platform = writable("");

const property_map_obj = {
	operating_system,
	platform
};

/**
 * store 업데이트
 * @param {*} key
 * @param {*} val
 */
export const update_device_store = (key, val) => {
	const property_to_update = property_map_obj[key];

	if (property_to_update) {
		property_to_update.set(val);
	}
};
