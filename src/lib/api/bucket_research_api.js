export default class Bucket_research_api {
	constructor(supabase, session) {
		this.supabase = supabase;
		this.session = session;
	}

	async upload_research_url(file_path, research_url) {
		const { error } = await this.supabase.storage.from("research").upload(file_path, research_url, {
			cacheControl: "3600",
			upsert: false
		});

		if (error) throw new Error(`Failed to upload_research_url: ${error.message}`);
	}
}
