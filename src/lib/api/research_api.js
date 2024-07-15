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

	async select_research__research_payment_info() {
		const { data, error } = await this.supabase.from("research").select(
			`id,
      created_at, 
      category,
      form_link, 
      title, 
      explanation, 
      start_date, 
      end_date, 
      recruitment_num, 
      min_age, 
      max_age, 
      gender,
      expected_time,
      remarks,
      status,
      research_payment_info(payment_method, bank_name, account_num)`
		);

		if (error)
			throw new Error(`Failed to select_research__research_payment_info: ${error.message}`);

		return data ?? [];
	}

	async update_research_status(id, status) {
		const { error } = await this.supabase.from("research").update({ status }).eq("id", id);

		if (error) throw new Error(`Failed to update_research_status: ${error.message}`);
	}
}
