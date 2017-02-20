import axios from 'axios';
import { store } from '../reducers/';

export function getHeroData() {
  const request = axios.get('/api/heroData');
  return {
    type: 'GET_HERO_DATA',
    payload: request,
  };
}
