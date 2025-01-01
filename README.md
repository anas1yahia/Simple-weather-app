# Weather App

This is a simple weather application that fetches weather data from the OpenWeatherMap API and displays it dynamically.

## Project Structure

\`\`\`
weatherApp2/
├── images/
│   ├── Sun.svg
│   ├── cloud.svg
│   ├── semiSun.svg
│   ├── rain.svg
│   ├── Light.svg
├── index.html
├── style.css
├── script.js
├── README.md
\`\`\`
## Setup Instructions

1. Clone the repository:
    ```sh
    git clone https://github.com/anas1yahia/Simple-weather-app
    cd simple weather app
    ```

2. Open [index.html](http://_vscodecontentref_/3) in your browser to view the application.

## Usage

1. Enter the name of a city in the search bar.
2. Click the search button to fetch and display the weather data for the entered city.

## Dependencies

- [OpenWeatherMap API](https://openweathermap.org/api) - Used to fetch weather data.

## File Descriptions

- **index.html**: The main HTML file that contains the structure of the application.
- **style.css**: The CSS file that contains the styling for the application.
- **script.js**: The JavaScript file that contains the logic for fetching and displaying weather data.
- **images/**: A directory containing the weather icons used in the application.

## API Key

To use this application, you need an API key from OpenWeatherMap. Replace `YOUR_API_KEY` in [script.js](http://_vscodecontentref_/4) with your actual API key.

```javascript
const APIKey = 'YOUR_API_KEY';
