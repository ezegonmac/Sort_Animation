import * as $ from "../vendor/jquery/jquery.min";

const nRows = 3;
let rows = [];

class Row {
	#id;
	#lists;

	constructor(id) {
		this.#id = id;
		this.#lists = new Set();
	}

	static createRows() {
		for (let i = 1; i <= nRows; i++) {
			// Objects
			let row = new Row(i);
			rows.push(row);

			// HTML
			let listHTML = $.parseHTML('<div id="row-' + i + '" class="row"><div>');
			$("#canvas").append(listHTML);
		}
	}

	static getNumRows() {
		return nRows;
	}

	static getRow(id) {
		return rows[id - 1];
	}

	static getAll() {
		return rows;
	}

	addList(list) {
		this.#lists.add(list);
	}

	removeList(list) {
		this.#lists.delete(list);
	}

	// GETTERS AND SETTERS

	get id() {
		return this.#id;
	}

	get lists() {
		return this.#lists;
	}
}

export { Row };
