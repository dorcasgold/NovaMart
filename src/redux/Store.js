import { configureStore } from "@reduxjs/toolkit";
import novaReducer from './novaSlice';
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

// Persist configuration
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, novaReducer);

// Configure store with persisted reducer and middleware
export const store = configureStore({
  reducer: { novamart: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);
