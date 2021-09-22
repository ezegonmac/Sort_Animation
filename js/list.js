let list = [];

let listLen = 10;
let min = -20;
let max = 20;
let rangeLen = max - min;

class List {
	id;
	name;
	items;
	x;
	y;
	row;

	constructor(id, row) {
		this.id = id;
		this.row = row;
		this.name = "list-" + id;
		this.items = [];
		this.x = 0;
		this.y = 0;
	}

	randomize() {
		let items = [];
		for (let i = 0; i < listLen; i++) {
			// CALC RANDOM VAL
			let val = Math.floor(Math.random() * rangeLen) - Math.abs(min);

			let item = new Item(i, val);
			items.push(item);
		}
		this.items = items;

		this.show();
	}

	show() {
		// show in HTML
		$("#" + this.name).empty();

		console.log(this.items);
		for (let item of this.items) {
			let html = $.parseHTML(
				"<div id='item-" +
					item.id +
					"' class='item'>" +
					item.val +
					"</divclass=>"
			);
			$("#" + this.name).append(html);
		}

		this.transform();
	}

	unsort() {
		for (let i = this.items.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.items[i], this.items[j]] = [this.items[j], this.items[i]];

			this.items[i].id = i;
			this.items[j].id = j;
		}

		this.show();
	}

	unsortAnimated() {
		for (let i = list.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.items[i], this.items[j]] = [this.items[j], this.items[i]];

			this.items[i].id = i;
			this.items[j].id = j;
		}

		this.show();
	}

	transform() {
		transformList(this);
	}
}
