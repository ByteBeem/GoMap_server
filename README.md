# GoMap Server

GoMap Server is a server-side application that interacts with the Google Maps API to provide routing and mapping functionalities. It supports fetching directions between two locations and displaying the path on a map, among other features.

## Features

- Fetch directions between a source location and a destination.
- Display the route as a polyline on a map.
- Integration with the Google Maps API for real-time route calculation.
- Uses `react-native-maps` to display the map in a React Native app.

## Technologies Used

- **React Native**: For the mobile app interface.
- **Google Maps API**: For routing and directions.
- **Axios**: For making HTTP requests to the Google Maps API.
- **Expo Location**: For accessing the device's current location.

## Setup

### Prerequisites

- **Node.js** (v14.x or later)
- **npm** (v6.x or later)
- **React Native** environment set up on your machine.
- **Google Maps API Key**: Get your API key from [Google Cloud Console](https://console.cloud.google.com/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/GoMap_server.git
   cd GoMap_server
