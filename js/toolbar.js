import * as $ from "../vendor/jquery/jquery.min";
class Toolbar {
	static initializeToolbar(mainList) {
		$("#btn-unsort").click(() => {
			mainList.unsort();
		});

		$("#btn-random").click(() => {
			mainList.randomize();
		});
	}
}

export { Toolbar };
