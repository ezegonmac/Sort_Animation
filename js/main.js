$(document).ready(function () {
	const ls1 = new List(1, 1);

	ls1.randomize();
	ls1.show();

	initializeToolbar(ls1);

	window.addEventListener("resize", function () {
		canvasWid = Math.floor($("#canvas").width());
		canvasHei = Math.floor($("#canvas").height());

		ls1.transform();
	});
});
