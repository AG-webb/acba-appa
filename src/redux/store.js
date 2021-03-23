import { createStore, combineReducers } from "redux";
import ownerReducer from "./owners-reducer";
import stepsReducer from "./steps-reducer";

let reducers = combineReducers({
    stepsPage: stepsReducer,
    owner: ownerReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;