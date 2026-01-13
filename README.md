# Pi-Home

Pi-Home is a home automation application built with Apache Cordova that allows you to control your home lights and monitor temperature using your smartphone. The app communicates with a Raspberry Pi backend to manage GPIO-controlled devices and uses Firebase for data storage.

## Features

- **Light Control**: Individually control lights in your home via smartphone
- **Temperature Monitoring**: View current temperature and historical data (last 8 hours)
- **Fingerprint Authentication**: Secure access using biometric authentication on Android devices
- **Email Integration**: Send emails directly from the app
- **Cross-Platform**: Built for Android and Browser platforms

## Requirements

- Node.js (v10 or higher)
- Cordova CLI (`npm install -g cordova`)
- Android SDK (for Android builds)
- Java JDK (for Android builds)
- Raspberry Pi with Python 3 (for backend)
- Firebase project with Realtime Database

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pi-home.git
   cd pi-home/cordova
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add platforms:
   ```bash
   cordova platform add android
   cordova platform add browser
   ```

4. Build the project:
   ```bash
   cordova build android
   # or for browser
   cordova build browser
   ```

5. Run on device/emulator:
   ```bash
   cordova run android
   # or for browser
   cordova run browser
   ```

## Backend Setup (Raspberry Pi)

The Python scripts in the `python/` folder handle the hardware control:

- `lampen.py`: Controls GPIO pins for lights
- `switch.py`: Manages switches
- `temperatuur.py`: Reads temperature sensors

### Setup Raspberry Pi:

1. Install required Python packages:
   ```bash
   pip install firebase-admin RPi.GPIO
   ```

2. Configure Firebase credentials (place `project_cordova_cred.json` in `/home/pi/`)

3. Run the scripts as needed (e.g., via systemd services or cron jobs)

## Project Structure

```
cordova/
├── config.xml          # Cordova configuration
├── package.json        # Node.js dependencies
├── www/                # Web assets
│   ├── index.html      # Main app page
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── img/            # Images
├── platforms/          # Platform-specific code
├── plugins/            # Cordova plugins
└── res/                # Resources (icons, splash screens)

python/                 # Raspberry Pi backend scripts
├── lampen.py           # Light control
├── switch.py           # Switch management
└── temperatuur.py      # Temperature monitoring
```

## Plugins Used

- `cordova-plugin-whitelist`: Controls network access
- `cordova-plugin-email`: Email functionality
- `cordova-plugin-android-fingerprint-auth`: Biometric authentication
- `es6-promise-plugin`: ES6 Promise support

## Configuration

- Orientation: Portrait
- Keep Running: False (app pauses when not active)

## Author

Tibo Vermunicht 

## License

Apache License 2.0