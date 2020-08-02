import { createLogger } from "redux-logger";
import {createStore,combineReducers,applyMiddleware} from 'redux';

import user from './reducers/userReducer';

const logger = createLogger();
const reducer = combineReducers({user});

export default createStore(reducer, {}, applyMiddleware(logger));
