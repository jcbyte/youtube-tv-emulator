import electron, { app, BrowserWindow } from "electron";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { getConfig } from "./config.js";

// Directory of the this current file
const __dirname = dirname(fileURLToPath(import.meta.url));

function createWindow(appConfig) {
	// Get the chosen display from the config
	let displays = electron.screen.getAllDisplays();
	let chosenDisplay = displays.find((display) => display.label == appConfig.display) ?? displays[0];

	// Create a new window
	const win = new BrowserWindow({
		title: "Youtube TV Emulator",
		icon: join(__dirname, "..", "assets", "icon.png"),
		fullscreen: true,
		autoHideMenuBar: true,
		x: chosenDisplay.bounds.x,
		y: chosenDisplay.bounds.y,
	});

	// Prevent the loaded pages title overriding ours
	win.on("page-title-updated", (event) => {
		event.preventDefault();
	});

	// Load youtube.com/tv with headers to spoof connection from smart TV
	win.loadURL("http://youtube.com/tv", {
		userAgent:
			"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36; Youtube ; Tizen 4.0",
	});
}

// This is the main entry point for app
export default function main() {
	// When electron has loaded start the app
	app.whenReady().then(() => {
		// Load external config file
		const appConfig = getConfig();

		// ! For debugging, remove later
		console.log(appConfig);

		// Create app
		createWindow(appConfig);
	});

	// Quit the app once all windows have been closed by the user
	app.on("window-all-closed", () => {
		app.quit();
	});
}
