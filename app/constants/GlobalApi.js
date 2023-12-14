import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const API_KEY = "process.env.REACT_APP_API_KEY";

const config = {
    headers:{
        'Content-Type': 'application/json',
        'X-Goog-Api-Key':API_KEY,
        'X-Goog-FieldMask':[
            'places.displayName',
            'places.formattedAddress',
            'places.shortFormattedAddress',
            'places.location',
            'places.servesBreakfast',
            'places.photos',
        ],
    }
}

const NewNearByPlace = (data) => axios.post(BASE_URL, config, data);

export default {
    NewNearByPlace
}