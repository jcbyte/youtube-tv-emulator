# <img src="assets/icon.png" height="40"> &nbsp;Youtube TV Emulator

Emulate a Smart TV running Youtube from a PC, allowing you to cast Youtube content from your phone directly to your computer.

Achieved by spoofing the useragent to make your connection appear to come from a smart TV, allowing you to access [youtube.com/tv](https://youtube.com/tv).

## Installation

Grab the appropriate binary from the [releases](https://github.com/jcbyte/youtube-tv-emulator/releases) page.

## Connecting To Phone

1. Open "Youtube TV Emulator" on your computer
2. Click on settings (bottom left)
3. Click "Link with TV code"
4. Open the Youtube app on your smartphone
5. Click on the cast icon (top right), if you cannot see this try the workaround [below](#cast-icon-workaround)
6. Tap "Link with TV code"
7. Enter the code on your computer screen in the box and press "Link"

#### Cast Icon Workaround

1. Tap on your account (bottom right)
2. Tap on settings (top right)
3. Tap "Watch on TV"
4. Tap "Enter TV code"
5. Continue from step 7 [above](#connecting-to-phone)

## Run Locally

Install dependencies

```bash
npm i
```

Locally start electron app

```bash
npm run start
```

## Build

Build

```sh
npm run make
```

This will create:

- Squirrel installer for win32
- Portable archive for win32

## Tech Stack

Electron

## Authors

- [@jcbyte](https://github.com/jcbyte)
