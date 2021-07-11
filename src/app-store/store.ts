import { createBrowserHistory } from 'history'
import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer, { rootEpic } from "./root-reducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ["home"]
}

const persistedReducer = persistReducer(persistConfig, createRootReducer(history))



const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat([epicMiddleware, routerMiddleware(history)])
});



epicMiddleware.run(rootEpic);

export default store;
export const persistor = persistStore(store);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch