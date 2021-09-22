const nRows = 3;
let rows = [];

class Row {
	constructor(id) {
		this.id = id;
		this.lists = new Set();
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

	addList(listId) {
		this.lists.add(listId);
	}

	removeList(listId) {
		this.lists.delete(listId);
	}
}
