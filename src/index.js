export default class Main {
	static ctx = document.getElementById("canvas").getContext("2d");
	static bg; static fg; static accent;
	static resize(e) {
		const canv = document.getElementById("canvas");
		const r = canv.getBoundingClientRect();
		const dim = Math.min(window.innerWidth * 0.5625 - r.left, window.innerHeight - r.top) - 16;
		canv.style = `width: ${String(Math.floor(16 / 9 * dim))}px; height: ${String(Math.floor(dim))}px`;
	}
	static initColors(dark) {
		if (dark) {
			Main.bg = "#000";
			Main.fg = "#eee";
			Main.accent = "#a3a";
		} else {
			Main.bg = "#efb";
			Main.fg = "#000";
			Main.accent = "#b4b";
		}
	}
	static init() {
		Main.ctx.fillStyle = Main.bg;
		Main.ctx.fillRect(0, 0, 1280, 720);
	}
	static main(e) {
		document.getElementsByClassName("script-required").item(0).style = "";
		Main.resize(undefined);
		window.addEventListener("resize", Main.resize);
		Main.initColors(window.matchMedia?.('(prefers-color-scheme: dark)').matches);
		Main.init();
	}
}
