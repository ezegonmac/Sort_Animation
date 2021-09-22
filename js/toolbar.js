function initializeToolbar(mainList) {
	$("#btn-unsort").click(() => {
		mainList.unsort();
	});

	$("#btn-random").click(() => {
		mainList.randomize();
	});
}
