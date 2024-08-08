import { app } from "electron";
import fs from "fs";
import { join } from "path";

// Name of the configuration file
const CONFIG_NAME = "config.json";

// Load config from external file
export function getConfig() {
	// Read the file and return the JSON as an object
	const configPath = join(app.getPath("userData"), CONFIG_NAME);
	const appConfigRaw = fs.readFileSync(configPath, { encoding: "utf-8" });

	return JSON.parse(appConfigRaw);
}
