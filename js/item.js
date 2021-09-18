class Item {
	#id;
	#val;
	#x;
	#y;

	constructor(id, val) {
		this.#id = id;
		this.#val = val;
		this.#x = 0;
		this.#y = 0;
	}

	// SETTERS
	set x(x) {
		this.#x = x;
	}

	set y(y) {
		this.#y = y;
	}

	set val(val) {
		this.#val = val;
	}

	//GETTERS
	get id() {
		return this.#id;
	}

	get x() {
		return this.#x;
	}

	get y() {
		return this.#y;
	}

	get val() {
		return this.#val;
	}

	// TOSTRING
	toString() {
		return (
			"Item[" +
			"id=" +
			this.#id +
			", val=" +
			this.#val +
			", (x, y)=(" +
			this.#x +
			", " +
			this.#y +
			")]"
		);
	}
}
