# weather-application
This weather application collects data from API(s) and provide information back to the user. On the main "weather" page when the user enters the location that location string is parsed into coordinates (using MAPBOX API). Those coordinates are then used by the weather API's query string. JSON is sent back to the backend and is shown to the user in a paragraph using some manipulations that are done using client side javascript.