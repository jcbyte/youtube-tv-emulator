import main from "./main.js";

// If this is run as startup, then do default electron-squirrel-startup else run app
import isSquirrelStartup from "electron-squirrel-startup";
if (!isSquirrelStartup) {
	main();
}
