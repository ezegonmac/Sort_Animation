$(document).ready(function () {
	Row.createRows();

	const mainList = new List(1, 1);

	mainList.randomize();
	mainList.show();

	initializeToolbar(mainList);

	window.addEventListener("resize", function () {
		canvasWid = Math.floor($("#canvas").width());
		canvasHei = Math.floor($("#canvas").height());

		// TODO: transform all lists not only 1
		mainList.transform();
	});

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
