let rows = 1;

let itemSize = 30;
let itemMargin = 5;

let canvasWid = Math.floor($("#canvas").width());
let canvasHei = Math.floor($("#canvas").height());

let arrayWid = 0;
let arrayHei = 0;

// TRANSFORM ARRAY
function transformArray() {
	resizeArray();
	positionArray();

	resizeItems();
	positionItems();
}

function positionArray() {
	// X
	let xPos = canvasWid / 2 - arrayWid / 2;
	$("#array-1").css("left", xPos.toString() + "px");

	// Y
	let yPos = canvasHei / 2 - arrayHei / 2;
	$("#array-1").css("top", yPos.toString() + "px");
}

function resizeArray() {
	// HEIGHT
	arrayHei = itemSize + 2 * itemMargin;
	$("#array-1").css("height", arrayHei.toString() + "px");

	//WIDTH
	arrayWid = arrayLen * (itemSize + itemMargin) + itemMargin;
	$("#array-1").css("width", arrayWid.toString() + "px");
}

function positionItems() {
	let xOrigin = canvasWid / 2 - arrayWid / 2;
	let yOrigin = canvasHei / 2 - arrayHei / 2;

	//console.log(xOrigin);
	//console.log(yOrigin);
	for (let i = 0; i < array.length; i++) {
		let item = array[i];

		let xOffset = i * (itemSize + itemMargin) + itemMargin;
		let yOffset = itemMargin;

		let x = xOrigin + xOffset;
		let y = yOrigin + yOffset;

		// Store values
		item.x = x;
		item.y = y;

		console.log(item);

		// CSS
		let id = "item-" + i;
		$("#" + id).css("top", y + "px");
		$("#" + id).css("left", x + "px");
	}
}

function resizeItems() {
	$(".item").css("width", itemSize);
	$(".item").css("height", itemSize);
}
