let array = [];
let len = 10;
let min = -20;
let max = 20;
let rangeLen = max - min;

$(document).ready(function () {
	generateArray();
	showArray();
});

// FUNCTIONS

function generateArray() {
	let num = 0;

	array = [];
	for (let i = 0; i < len; i++) {
		num = Math.floor(Math.random() * rangeLen) - Math.abs(min);
		array.push(num);
	}
}

function showArray() {
	// show in HTML
	$("#array-1").empty();

	for (item of array) {
		console.log(item.toString());
		let html = $.parseHTML("<div class='item'>" + item.toString() + "</div>");
		$("#array-1").append(html);
	}
}

function unsort() {
	for (let i = len - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	showArray();
}

function unsortAnimated() {
	for (let i = len - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	showArray();
}

function randomize() {
	generateArray();
	showArray();
}
