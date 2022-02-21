import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { SearchReducer } from "./Reducer/SearchReducer";

const rootReducer = combineReducers({
  SearchRedcer: SearchReducer
});
export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
console.log(store.getState());
