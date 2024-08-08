import fs from "fs";
import { join } from "path";
import { getPathDev } from "./utils.js";

// Name of the configuration file
const CONFIG_NAME = "config.json";

// Load config from external file
export function getConfig() {
	// Read the file and return the JSON as an object
	const configPath = join(getPathDev("userData"), CONFIG_NAME);
	const appConfigRaw = fs.readFileSync(configPath, { encoding: "utf-8" });

	return JSON.parse(appConfigRaw);
}
