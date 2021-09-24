import * as $ from "../vendor/jquery/jquery.min";
import Row from "./row.js";
import List from "./list.js";

const itemSize = 30;
const itemMargin = 5;

let canvasWid = Math.floor($("#canvas").width());
let canvasHei = Math.floor($("#canvas").height());

let listWid;
let listHei;

let rowHei;

class Positioning {
	// GRID
	createGrid() {
		if (Row.getNumRows() > 1) {
			for (let i = 2; i <= Row.getNumRows(); i++) {
				let row = $.parseHTML("<div id='row-" + i + "' class='row'></div>");
				console.log(row);

				$("#canvas").append(row);
			}
		}
	}

	// TRANSFORM ARRAY
	transformList(list) {
		this.resizeList(list);
		this.positionList(list);

		this.resizeItems(list);
		this.positionItems(list);
	}

	reTransformList(list) {
		this.positionList(list);
		this.positionItems(list);
	}

	positionList(list) {
		let row = Row.getRow(list.row);
		let lists = Array.from(row.lists);
		let numListsInRow = lists.length;
		let colWid = canvasWid / (numListsInRow + 1);
		rowHei = canvasHei / Row.getNumRows();

		for (let i = 0; i < numListsInRow; i++) {
			// X
			let list = lists[i];
			console.log(list);
			let pos = i + 1;

			let x = colWid * pos - listWid / 2;
			$("#" + list.name).css("left", x.toString() + "px");
			list.x = x;

			// Y
			let y = list.row * rowHei - rowHei / 2 - listHei / 2;
			$("#" + list.name).css("top", y.toString() + "px");
			list.y = y;
		}
	}

	resizeList(list) {
		//WIDTH
		if (list.items.length < 1) {
			listWid = 2 * (itemSize + itemMargin) + itemMargin;
			$("#" + list.name).css("width", listWid.toString() + "px");
		} else {
			listWid = List.getListLen() * (itemSize + itemMargin) + itemMargin;
			$("#" + list.name).css("width", listWid.toString() + "px");
		}

		// HEIGHT
		listHei = itemSize + 2 * itemMargin;
		$("#" + list.name).css("height", listHei.toString() + "px");
	}

	positionItems(list) {
		for (let i = 0; i < list.items.length; i++) {
			let item = list.items[i];

			//console.log(item);

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

	resizeItems() {
		$(".item").css("width", itemSize);
		$(".item").css("height", itemSize);
	}

	createResizeListener() {
		window.addEventListener("resize", function () {
			// TODO: Listen only every few milisec

			canvasWid = Math.floor($("#canvas").width());
			canvasHei = Math.floor($("#canvas").height());

			for (let list of List.getAll()) {
				list.reTransform();
			}
		});
	}
}

export { Positioning };
