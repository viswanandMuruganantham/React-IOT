# React-IoT Dashboard

## Overview

The **React-IoT Dashboard** is a web application that displays real-time data from IoT devices using the ThingSpeak API. The dashboard visualizes sensor data (temperature and humidity) in an interactive chart and provides control options for a connected motor. This project leverages **React** for the frontend, **Chart.js** for data visualization, and **GitHub Pages** for deployment.

## Features

- **Real-time sensor data visualization**: Displays temperature and humidity data in a line chart.
- **Motor control**: Provides a button to turn the motor on or off.
- **Responsive design**: Works on both desktop and mobile devices.
- **Interactive chart**: Visualizes sensor data with Chart.js.
- **Data fetch**: Fetches data from ThingSpeak IoT platform.

## Demo

You can access the live version of the dashboard here:

[React-IoT Dashboard](https://viswanandmuruganantham.github.io/React-IOT/)

## Tech Stack

- **Frontend**: React, Vite
- **Charting**: Chart.js
- **API Integration**: ThingSpeak API
- **Deployment**: GitHub Pages

## Installation

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your system. You can check your versions using:

```bash
node -v
npm -v
Clone the repository
Clone the project to your local machine:

git clone https://github.com/viswanandmuruganantham/React-IOT.git
Install dependencies
Navigate into the project directory and install the required dependencies:

cd React-IOT
npm install
Run the development server
To run the application locally in development mode, use the following command:

npm run dev
This will start a local server at http://localhost:3000.

Deployment
To deploy the application to GitHub Pages, run the following commands:

Build the project:

npm run build
npm run deploy
This will push the build to the gh-pages branch and make the site accessible at your GitHub Pages URL.

Usage
Motor Control: The button below the chart allows you to turn the motor on or off. The button color will change to indicate the motor's current status.
Sensor Data: Real-time sensor data for temperature and humidity is displayed in a line chart. Data is fetched from ThingSpeak.
Instructions: Below the chart, there is a section with instructions on how to interact with the app and the connected motor.


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
