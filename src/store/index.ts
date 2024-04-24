import { combineReducers, configureStore,AnyAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import  {ThunkDispatch }  from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import  authSlice from "./authSlice";
import { useDispatch } from "react-redux";

const persistConfig = {
    key: "root",
    storage,
}

const reducers = combineReducers({
    auth:authSlice,

});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    

});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();