export default class Main {
	static ctx = document.getElementById("canvas").getContext("2d");
	static main(e) {
		document.getElementsByClassName("script-required").item(0).style = "";
		Main.resize(undefined);
		window.addEventListener("resize", Main.resize);
	}
	static resize(e) {
		const canv = document.getElementById("canvas");
		const r = canv.getBoundingClientRect();
		const dim = Math.min(window.innerWidth * 0.5625 - r.left, window.innerHeight - r.top) - 16;
		canv.style = `width: ${16 / 9 * dim}px; height: ${dim}px`;
	}
}
