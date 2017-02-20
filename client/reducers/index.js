import { combineReducers, applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import HeroDataReducer from './hero_data_reducer';


const rootReducer = combineReducers({
    heroData: HeroDataReducer,
});

const logger = createLogger();
const store = process.env.NODE_ENV !== 'production' ? createStore(rootReducer, applyMiddleware(promise, logger)) : createStore(rootReducer, applyMiddleware(promise));

export { rootReducer, store };
