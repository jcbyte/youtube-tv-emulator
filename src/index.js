const { app, BrowserWindow } = require("electron");

function createWindow() {
	win = new BrowserWindow();

	win.on("closed", () => {
		win = null;
	});
}

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
