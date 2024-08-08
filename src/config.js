import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Directory of the this current file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Name of the configuration file
const CONFIG_NAME = "config.json";

export function getConfig() {
	const configPath = join(__dirname, CONFIG_NAME);
	const appConfigRaw = fs.readFileSync(configPath, { encoding: "utf-8" });

	return JSON.parse(appConfigRaw);
}
