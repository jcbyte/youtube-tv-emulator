module.exports = {
	packagerConfig: {
		name: "youtube-tv-emulator",
		icon: "./assets/icon",
	},
	makers: [
		{
			name: "@electron-forge/maker-squirrel",
			config: {
				setupIcon: "./assets/icon.ico",
				// `iconUrl` is to set the icon which shows up in control panel and can only be remote files,
				// (this is annoying as if the user installs without internet it will not be changed).
				// Note: you must also restart the system before this icon will show up in the control panel.
				// ! In the future this may be changed to allow local files, if so this should be updated to use that.
				iconUrl: "https://raw.githubusercontent.com/jcbyte/youtube-tv-emulator/main/assets/icon.ico",
			},
		},
		{
			name: "@electron-forge/maker-zip",
			config: {
				platform: "win32",
			},
		},
	],
};
