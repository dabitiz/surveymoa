export default class Profiles_api {
	constructor(supabase, session) {
		this.supabase = supabase;
		this.session = session;
	}

	async get_profile_info() {
		const { data, error } = await this.supabase
			.from("profiles")
			.select(`avatar_url, year_of_birth, gender, username`)
			.eq("id", this.session.user.id)
			.single();

		if (error) throw new Error(`Failed to get_profile: ${error.message}`);
		return data;
	}

	/**
	 * 닉네임 중복여부 확인
	 * @return {Promise<Array<Object>>} - 닉네임 중복시 length > 1 이상
	 */
	async check_duplicate_username(new_username) {
		const { data, error } = await this.supabase
			.from("profiles")
			.select("username")
			.eq("username", new_username);

		if (error) throw new Error(`Failed to check_duplicate_username: ${error.message}`);
		return data;
	}

	async upsert_avatar_url(img_url) {
		const { error } = await this.supabase.from("profiles").upsert({
			id: this.session.user.id,
			avatar_url: img_url,
			updated_at: new Date()
		});

		if (error) throw new Error(`Failed to upsert_avatar_url: ${error.message}`);
	}

	async upsert_username(new_username) {
		const { error } = await this.supabase.from("profiles").upsert({
			id: this.session.user.id,
			username: new_username,
			updated_at: new Date()
		});

		if (error) throw new Error(`Failed to upsert_username: ${error.message}`);
	}
}
