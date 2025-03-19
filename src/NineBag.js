export class NineBag {
	#bag;
	constructor() {
		#bag = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	}
	next() {
		const r = Math.floor(Math.random() * this.#bag.length);
		const v = this.#bag[r];
		this.#bag[r] = this.#bag[this.#bag.length - 1];
		if (this.#bag.length == 1) {
			this.#bag = [0, 1, 2, 3, 4, 5, 6, 7, 8]
		} else {
			this.#bag.pop();
		}
		return v;
	}
}
