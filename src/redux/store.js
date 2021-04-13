import { createStore, combineReducers } from "redux";
import companiesReducer from "../reducers/companies-reducer";
import ownerReducer from "../reducers/owner-reducer";
import stepsReducer from "../reducers/steps-reducer";

let reducers = combineReducers({
    stepsPage: stepsReducer,
    owner: ownerReducer,
    companies: companiesReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;