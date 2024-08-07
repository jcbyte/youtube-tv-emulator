module.exports = {
	packagerConfig: {
		name: "youtube-tv-emulator",
		icon: "./assets/icon",
	},
	makers: [
		{
			name: "@electron-forge/maker-zip",
			config: {
				platform: "win32",
			},
		},
	],
};
