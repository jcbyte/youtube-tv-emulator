# <img src="assets/icon.png" height="40"> &nbsp;Youtube TV Emulator

Electron app to emulate a Smart TV running Youtube from a PC, allowing you to cast Youtube content from your phone directly to your computer.

Achieved by spoofing the useragent to make your connection appear to come from a smart TV, allowing you to access [youtube.com/tv](https://youtube.com/tv).

## Installation

Precompiled binaries for **Windows** are avalible in [Releases](https://github.com/jcbyte/youtube-tv-emulator/releases).

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

## Configuration

To configure the app we can modify the `config.json` file located in `%APPDATA%\youtube-tv-emulator`.

It contains a json dictionary, you can modify the below keys to change the app behaviour and settings:

- `display` is the name of the monitor the app is displayed on, _default ""_.
  - This is the name given by windows, and can be found in `System > Display > Advanced display`.

## Run Locally

Install dependencies:

```bash
npm i
```

Start electron app:

```bash
npm run start
```

When developing locally `devStorage/` contains the `userData`, `appData`, etc. folders and files which we regularly retrieve from.

## Build

```sh
npm run make
```

This will create:

- Squirrel installer for win32
- Portable archive for win32

## Licence

[Apache License 2.0](LICENSE)
