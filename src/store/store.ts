import AsyncStorage from "@react-native-async-storage/async-storage";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import {authSlice} from "./slices/authSlice";
import {themeSlice} from "./slices/themeSlice";

// Combine your reducers
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  theme: themeSlice.reducer
});

// Config for Redux Persist
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"] // persist only auth slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
