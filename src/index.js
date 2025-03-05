export default class Main {
	static ctx = document.getElementById("canvas").getContext("2d");
	static resize(e) {
		const canv = document.getElementById("canvas");
		const r = canv.getBoundingClientRect();
		const dim = Math.min(window.innerWidth * 0.5625 - r.left, window.innerHeight - r.top) - 16;
		canv.style = `width: ${String(Math.floor(16 / 9 * dim))}px; height: ${String(Math.floor(dim))}px`;
	}
	static init() {
		//
	}
	static main(e) {
		document.getElementsByClassName("script-required").item(0).style = "";
		Main.resize(undefined);
		window.addEventListener("resize", Main.resize);
		Main.init();
	}
}
