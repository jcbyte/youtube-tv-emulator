import fs from "fs";
import { join } from "path";
import { getPathDev } from "./utils.js";

// Name of the configuration file
const CONFIG_NAME = "config.json";

const DEFAULT_CONFIG = {
	display: "",
};

// Load config from external file, the file will be created if it does not already exist
export function getConfig() {
	const configPath = join(getPathDev("userData"), CONFIG_NAME);

	// If the file does not exist then create it
	if (!fs.existsSync(configPath)) {
		fs.writeFileSync(configPath, JSON.stringify(DEFAULT_CONFIG));
		return DEFAULT_CONFIG;
	}

	// Read the file and return the JSON as an object
	const appConfigRaw = fs.readFileSync(configPath, { encoding: "utf-8" });
	return JSON.parse(appConfigRaw);
}
