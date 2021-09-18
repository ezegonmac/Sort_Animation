let array = [];

let arrayLen = 10;
let min = -20;
let max = 20;
let rangeLen = max - min;

$(document).ready(function () {});

function generateArray() {
	let num = 0;

	array = [];
	for (let i = 0; i < arrayLen; i++) {
		// CALC RANDOM VAL
		val = Math.floor(Math.random() * rangeLen) - Math.abs(min);

		let item = new Item(i, val);
		array.push(item);
	}
}

function showArray() {
	// show in HTML
	$("#array-1").empty();

	for (item of array) {
		//console.log(item.toString());

		let html = $.parseHTML(
			"<div id='item-" + item.id + "'class='item'>" + item.val + "</divclass=>"
		);
		$("#array-1").append(html);
	}

	transformArray();
}

function unsort() {
	for (let i = arrayLen - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	showArray();
}

function unsortAnimated() {
	for (let i = arrayLen - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	showArray();
}

function randomize() {
	generateArray();
	showArray();
}
