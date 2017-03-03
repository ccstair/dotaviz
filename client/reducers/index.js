import { combineReducers, applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import HeroImagesReducer from './hero_images_reducer';
import HeroLineupReducer from './add_to_lineup_reducer';
import FilterHeroTableReducer from './filter_hero_table';


const rootReducer = combineReducers({
  heroImages: HeroImagesReducer,
  heroLineup: HeroLineupReducer,
  filter: FilterHeroTableReducer,
});

const logger = createLogger();
const store = process.env.NODE_ENV !== 'production' ? createStore(rootReducer, applyMiddleware(promise, logger)) : createStore(rootReducer, applyMiddleware(promise));

export { rootReducer, store };
