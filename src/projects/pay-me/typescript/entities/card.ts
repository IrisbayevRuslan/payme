type CARD_TYPE = 'UZCARD' | 'HUMO' | 'VISA';
type BANK_NAME = 'TBC' | 'NBU' | 'KAPITAL_BANK';

export class Card {
	private id: string;
	private balance = 0;

	constructor(
		public number: string,
		public pin: string,
		public expiry: string,
		public type: CARD_TYPE,
		public ownerId: string,
		public bankName: BANK_NAME
	) {}

	setId(id: string) {
		this.id = id;
	}

	getId() {
		return this.id;
	}

	setBalance(balance: number) {
		this.balance = balance;
	}
	getBalance() {
		return this.balance;
	}
}
