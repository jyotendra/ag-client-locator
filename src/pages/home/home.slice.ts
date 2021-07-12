import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, debounceTime, delay, filter, map, switchMap, tap } from 'rxjs/operators';
import { yelpResponseType } from '../../shared/types/yelp-response.type';
import { getUnderPerformingParking } from './home.service';



const homeSlice = createSlice({
    name: 'home',
    initialState: {
        searchKeyword: "",
        searchResults: [],
        error: {
            encountered: false,
            info: ""
        },
        showLoader: false
    } as HomeState,
    reducers: {
        receivedNewKeyword: (state, action: PayloadAction<newKeywordActionPayload>) => {
            state.searchKeyword = action.payload.keyWord;
            state.showLoader = true;

        },
        receivedSearchResults: (state, action: PayloadAction<resultsRecievedActionPayload>) => {
            if (action.payload.results && action.payload.results.businesses) {
                state.showLoader = false;
                state.searchResults = action.payload.results.businesses.sort((a, b) => a.rating - b.rating);
            }
        },
        fetchErrorOccurred: (state, action: PayloadAction<errorOccurredActionPayload>) => {
            state.error.encountered = true;
            state.error.info = action.payload.info;
        },
        clearSearchResults: (state) => {
            state.searchResults = [];
            state.searchKeyword = "";
            state.showLoader = false;
        },
        handleFetchError: (state) => {
            state.error.encountered = false;
            state.error.info = "";
            state.showLoader = false;
        }
    }
});


const getSearchResult = (action$: any) =>
    action$.pipe(
        filter(receivedNewKeyword.match),
        // tap((action: any) => { console.log(action.payload.keyWord) }),
        debounceTime(800),
        switchMap((action: any) => getUnderPerformingParking(action.payload.keyWord)
            .pipe(
                tap(v => { console.log(v) }),
                map(v => {
                    if (v.data.error) return fetchErrorOccurred({ info: v.data.error.description });
                    return receivedSearchResults({ results: v.data });
                }),
                catchError(err => {
                    return of(fetchErrorOccurred({ info: "Error Occurred while fetching list from yelp" }))
                })
            )
        )
    );





export const homeEpic = combineEpics(getSearchResult);


export const { receivedNewKeyword, receivedSearchResults, fetchErrorOccurred, clearSearchResults, handleFetchError } = homeSlice.actions;
export default homeSlice.reducer;

// Home state
type HomeState = {
    searchKeyword: string,
    searchResults: yelpResponseType["businesses"],
    error: {
        encountered: boolean,
        info: string
    },
    showLoader: boolean
}

// Home Action Types

type newKeywordActionPayload = {
    keyWord: string
}

type resultsRecievedActionPayload = {
    results: yelpResponseType
}

type errorOccurredActionPayload = {
    info: string
}