export default class Screening_research_api {
	constructor(supabase, session) {
		this.supabase = supabase;
		this.session = session;
	}

	async insert_questions(questions, research_id) {
		const { error } = await this.supabase
			.from("screening_research")
			.insert([{ questions, research_id }]);

		if (error) throw new Error(`Failed to insert_questions: ${error.message}`);
	}

	async select_screening_research() {
		const { data, error } = await this.supabase.from("research").select(`
			id,
			title,
			remarks,
			screening_research(id, questions)
		`);

		if (error) throw new Error(`Failed to select_screening_research: ${error.message}`);
		return data || [];
	}

	async update_questions(questions, screening_research_id) {
		const { error } = await this.supabase
			.from("screening_research")
			.update([{ questions }])
			.eq("id", screening_research_id);

		if (error) throw new Error(`Failed to update_questions: ${error.message}`);
	}
	async delete_screening_research(screening_research_id) {
		const { error } = await this.supabase
			.from("screening_research")
			.delete()
			.eq("id", screening_research_id);

		if (error) throw new Error(`Failed to delete_screening: ${error.message}`);
	}
}
