export default class Account_user_api {
	constructor(supabase, session) {
		this.supabase = supabase;
		this.session = session;
	}

	async select_account() {
		const { data, error } = await this.supabase
			.from("account_user")
			.select(`id, bank_name, account_num`)
			.eq("user_id", this.session.user.id);

		if (error) throw new Error(`Failed to get_accounts: ${error.message}`);
		return data[0] ?? {};
	}

	async insert_account(bank_name, account_num) {
		const { data, error } = await this.supabase
			.from("account_user")
			.insert([{ bank_name, account_num, user_id: this.session.user.id }])
			.select(`id, bank_name, account_num`);

		if (error) throw new Error(`Failed to insert_account: ${error.message}`);
		return data[0] ?? [];
	}

	async upsert_account(account_id, bank_name, account_num) {
		const { data, error } = await this.supabase
			.from("account_user")
			.upsert({ id: account_id, bank_name, account_num, updated_at: new Date() })
			.select(`id, bank_name, account_num`);

		if (error) throw new Error(`Failed to insert_account: ${error.message}`);
		return data[0] ?? {};
	}
}
