export default class Research_payment_info_api {
	constructor(supabase, session) {
		this.supabase = supabase;
		this.session = session;
	}

	async insert_research_payment_info(research_payment_info) {
		const { error } = await this.supabase
			.from("research_payment_info")
			.insert(research_payment_info);

		if (error) throw new Error(`Failed to insert_research_payment_info: ${error.message}`);
	}
}
