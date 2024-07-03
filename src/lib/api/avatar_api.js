export default class Avatar_api {
	constructor(supabase, session) {
		this.supabase = supabase;
		this.session = session;
	}

	async upload_avatar_url(file_path, avatar_url) {
		const { error } = await this.supabase.storage.from("avatar").upload(file_path, avatar_url);

		if (error) throw new Error(`Failed to upload_avatar_url: ${error.message}`);
	}
}
