$(document).ready(function () {
	generateArray();

	//resizeArray();
	//positionArray();

	showArray();

	window.addEventListener("resize", function () {
		canvasWid = Math.floor($("#canvas").width());
		canvasHei = Math.floor($("#canvas").height());

		transformArray();
	});
});
