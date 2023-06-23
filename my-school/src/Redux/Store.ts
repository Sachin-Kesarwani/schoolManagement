import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {reducer as AuthReducer} from "../Redux/AuthRedux/reducer"
import {reducer as AdminReducer } from "../Redux/AdminRedux/reducer"

const rootReducer = combineReducers({
 AuthReducer,AdminReducer
  
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// type DispatchFunc = () => AppDispatch;
export let useAppDispatch: () => AppDispatch = useDispatch;
export let useAppSelector: TypedUseSelectorHook<RootState> = useSelector;