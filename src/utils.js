import { app } from "electron";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Directory of the this current file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Get either local path or app path depending if we are running in development
export function getPathDev(name) {
	return app.isPackaged ? app.getPath(name) : join(__dirname, "..", "devStorage", name);
}
