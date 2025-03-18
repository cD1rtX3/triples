export default class Main {
	static ctx = document.getElementById("canvas").getContext("2d");
	static dark;
	static resize(e) {
		const canv = document.getElementById("canvas");
		const dim = Math.min(
			window.innerWidth * 0.5625 - canv.parentElement.getBoundingClientRect().left,
			window.innerHeight - canv.getBoundingClientRect().top
		) - 16;
		canv.style = `width: ${String(Math.floor(16 / 9 * dim))}px; height: ${String(Math.floor(dim))}px`;
	}
	static init() {
		Main.ctx.fillStyle = /* Main.dark ? "black" : */ "#efb";
		Main.ctx.fillRect(0, 0, 1280, 720);
	}
	static main(e) {
		document.getElementsByClassName("script-required").item(0).style = "";
		Main.resize(undefined);
		window.addEventListener("resize", Main.resize);
		Main.dark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
		Main.init();
	}
}
