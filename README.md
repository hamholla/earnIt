# ChamPain 🍺

## Overview

ChamPain is a web application built using Create React App. It provides a fun and engaging way for cyclists to calculate the number of Miller High Life beers earned during their Strava activities. The app incorporates the concept of rewarding oneself with a refreshing beverage after completing a challenging ride.

## Features

1. **Strava Integration:** ChamPain integrates with the Strava API to fetch activity data and calculate the number of Miller High Lifes earned based on the distance and effort put into each ride.
2. **Beer Calculation:** The app utilizes a predefined formula to convert the distance and effort of each activity into the equivalent number of Miller High Life beers earned.
3. **Google Maps Integration:** ChamPain utilizes the Google Maps API to display a visual representation of the activity route using polylines on an interactive map.
4. **User-friendly Interface:** ChamPain offers an intuitive and user-friendly interface, making it easy for cyclists to enter their Strava access token, fetch activities, view their beer count, and explore the mapped routes.
5. **Tailwind CSS Styling:** The app is styled using the popular Tailwind CSS framework, resulting in a clean and visually appealing design.

## Installation and Setup

To set up ChamPain on your local machine, follow these steps:

1. Clone the repository from GitHub: `git clone https://github.com/your-username/ChamPain.git`
2. Navigate to the project directory: `cd ChamPain`
3. Install the dependencies: `npm install`
4. Obtain a Strava API access token by creating a Strava API application.
5. Obtain a Google Maps API key by creating a project on the Google Cloud Platform.
6. Open the project in a code editor and locate the `.env` file.
7. Replace the placeholder value for `REACT_APP_STRAVA_ACCESS_TOKEN` with your Strava API access token.
8. Replace the placeholder value for `REACT_APP_GOOGLE_MAPS_API_KEY` with your Google Maps API key.
9. Save the changes to the `.env` file.
10. Launch the development server: `npm start`
11. Open your web browser and visit `http://localhost:3000` to access ChamPain.

## Usage

1. **Entering Strava Access Token:** On the ChamPain homepage, you will find a form field to enter your Strava API access token. Paste your access token into the field and click the "Submit" button.
2. **Fetching Strava Activities:** After submitting your access token, the app will retrieve your Strava activities and display them in a list. Each activity will show the distance and effort level.
3. **Calculating Miller High Lifes:** ChamPain will automatically calculate the number of Miller High Lifes earned based on the distance and effort of each activity.
4. **Viewing Beer Count:** The total number of Miller High Lifes earned across all activities will be displayed prominently on the screen.
5. **Exploring Mapped Routes:** Clicking on an activity in the list will display the corresponding route on the interactive map using Google Maps integration. The route will be displayed as a polyline.

## Dependencies

ChamPain relies on the following dependencies:

- Create React App
- Tailwind CSS
- Strava API
- Google Maps API
