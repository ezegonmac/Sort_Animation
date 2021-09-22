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

	const ls2 = new List(2, 2);
	ls2.show();

	const ls3 = new List(3, 2);
	ls3.show();
});
