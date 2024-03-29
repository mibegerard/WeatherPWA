# Weather App PWA

This project is a Progressive Web App (PWA) that allows users to check the current weather conditions of different locations. It utilizes a service worker and manifest file to provide an enhanced offline experience.

## Features

- Allows users to search for weather conditions of various locations.
- Displays real-time weather data including temperature, description, and icon.
- Supports offline usage by caching weather data using a service worker.
- Provides an offline page when the user is not connected to the internet.

## Installation

To run the Weather App locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running `npm install`.
4. Build the project using `npm run build`.
5. Serve the built files using a static server. You can use `serve -s build` if you have `serve` installed globally, or any other server of your choice.

## Usage

Once the Weather App is running, you can:

- Enter a location in the search bar and press Enter to fetch the current weather conditions.
- View the temperature, description, and icon representing the weather condition.
- Experience seamless offline usage, with cached weather data available when the internet connection is not available.

## Service Worker

The Weather App uses a service worker to cache weather data and assets, enabling offline functionality. The service worker intercepts network requests and serves cached responses when the user is offline.

## Manifest File

The `manifest.json` file is used to configure the Weather App's appearance and behavior when installed on a device's home screen. It specifies metadata such as the app's name, icons, colors, and starting URL.
