const itemSize = 30;
const itemMargin = 5;

const canvasWid = Math.floor($("#canvas").width());
const canvasHei = Math.floor($("#canvas").height());

let listWid;
let listHei;

let rowHei;

// GRID
function createGrid() {
	if (nRows > 1) {
		for (let i = 2; i <= nRows; i++) {
			let row = $.parseHTML("<div id='row-" + i + "' class='row'></div>");
			console.log(row);

			$("#canvas").append(row);
		}
	}
}

// TRANSFORM ARRAY
function transformList(list) {
	resizeList(list);
	positionList(list);

	resizeItems(list);
	positionItems(list);
}

function positionList(list) {
	let row = rows[list.row];
	let nLists = row.lists.length;

	// X
	let x = canvasWid / 2 - listWid / 2;
	$("#" + list.name).css("left", x.toString() + "px");
	list.x = x;

	// Y
	rowHei = canvasHei / nRows;
	let y = list.row * rowHei - rowHei / 2 - listHei / 2;
	$("#" + list.name).css("top", y.toString() + "px");
	list.y = y;
}

function resizeList(list) {
	//WIDTH
	if (list.items.length < 1) {
		listWid = 2 * (itemSize + itemMargin) + itemMargin;
		$("#" + list.name).css("width", listWid.toString() + "px");
	} else {
		listWid = listLen * (itemSize + itemMargin) + itemMargin;
		$("#" + list.name).css("width", listWid.toString() + "px");
	}

	// HEIGHT
	listHei = itemSize + 2 * itemMargin;
	$("#" + list.name).css("height", listHei.toString() + "px");
}

function positionItems(list) {
	for (let i = 0; i < list.items.length; i++) {
		let item = list.items[i];

		console.log(item);

		let xOffset = i * (itemSize + itemMargin) + itemMargin;
		let yOffset = itemMargin;

		let x = list.x + xOffset;
		let y = list.y + yOffset;

		// Store values
		item.x = x;
		item.y = y;

		//console.log(item);

		// CSS
		$("#item-" + i).css("left", x + "px");
		$("#item-" + i).css("top", y + "px");
	}
}

function resizeItems() {
	$(".item").css("width", itemSize);
	$(".item").css("height", itemSize);
}
