import * as $ from "../vendor/jquery/jquery.min";
import List from "list.js";
import Row from "row.js";
import Toolbar from "row.js";
import Positioning from "./positioning";

$(document).ready(function () {
	Row.createRows();

	const mainList = new List(1, 1);

	mainList.randomize();
	mainList.show();

	Toolbar.initializeToolbar(mainList);
	Positioning.createResizeListener();

	// TEST

	// ROW 2
	const ls2 = new List(2, 2);
	ls2.show();
	const ls3 = new List(3, 2);
	ls3.show();

	// ROW 3
	const ls4 = new List(4, 3);
	ls4.show();
	const ls5 = new List(5, 3);
	ls5.show();
	const ls6 = new List(6, 3);
	ls6.show();
	const ls7 = new List(7, 3);
	ls7.show();
});
