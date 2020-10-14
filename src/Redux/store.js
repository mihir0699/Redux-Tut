import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import {Reducer} from "./reducer";

const middleWares = [logger];

const store = createStore(Reducer, applyMiddleware(...middleWares));
export default store;