// importing axios library for making an ajax request
import axios from 'axios';

const API_KEY = '31ca4fadaf0ca2be5034ffa138cc316a';
//ES 6 template string
// takes in as one string and javascript varaible and injects javascript variable in the string
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// to make the action type consistent throughout the application (in reducers)
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    // the ajax request to API
    // will return a promise
    const request = axios.get(url);
    console.log(request);
    return{
        type : FETCH_WEATHER,
        payload: request
    };
}