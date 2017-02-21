import { combineReducers, applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import HeroImagesReducer from './hero_images_reducer';
import HeroLineupReducer from './add_to_lineup_reducer';


const rootReducer = combineReducers({
    heroImages: HeroImagesReducer,
    heroLineup: HeroLineupReducer,
});

const logger = createLogger();
const store = process.env.NODE_ENV !== 'production' ? createStore(rootReducer, applyMiddleware(promise, logger)) : createStore(rootReducer, applyMiddleware(promise));

export { rootReducer, store };
