import { ActionCreatorWithoutPayload, createSlice } from '@reduxjs/toolkit'
import { ActionsObservable, combineEpics } from 'redux-observable';
import { filter, map, tap } from 'rxjs/operators';



const homeSlice = createSlice({
    name: 'home',
    initialState: {
        dummyState: "dummyState"
    },
    reducers: {
        dummyAction: () => { },
        dummyActionCompleted: () => { },
    }
});


const dummyEpic = (action$: ActionsObservable<any>) =>
    action$.pipe(
        filter(dummyAction.match),
        tap(() => { console.log("dummy epic") }),
        map(() => dummyActionCompleted())
    );


export const homeEpic = combineEpics(dummyEpic);


export const { dummyAction, dummyActionCompleted } = homeSlice.actions;
export default homeSlice.reducer;
