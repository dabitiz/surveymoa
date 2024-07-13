export default class Research_api {
	constructor(supabase, session) {
		this.supabase = supabase;
		this.session = session;
	}

	async insert_research(research_info) {
		const { data, error } = await this.supabase
			.from("research")
			.insert([{ ...research_info, user_id: this.session.user.id }])
			.select(`id`);

		if (error) throw new Error(`Failed to insert_research: ${error.message}`);
		return data[0] ?? [];
	}
}
