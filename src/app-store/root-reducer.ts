import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'


// ************* Reducers *********************

import home, { homeEpic } from '../pages/home/home.slice';

export const rootEpic = combineEpics(
  homeEpic
);

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  home
});

export default createRootReducer;