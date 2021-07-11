
import { getApiKey, getYelpUrl } from '../../shared/consts';
import axios from "axios";
import { from } from 'rxjs';

export const getUnderPerformingParking = (searchLocation: string) => {
    return from(axios.get(getYelpUrl(), {
        params: {
            term: 'parking',
            location: searchLocation,
            // sort_by: "rating"
        },
        headers: {
            Authorization: `Bearer ${getApiKey()}`
        }
    }));
}