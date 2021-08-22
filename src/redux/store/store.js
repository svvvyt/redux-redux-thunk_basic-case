import { createStore, combineReducers, applyMiddleware } from "redux";
import { cashReducer } from "../reducers/cashReducer";
import { customerReducer } from "../reducers/customerReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cashReducer,
  customerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
