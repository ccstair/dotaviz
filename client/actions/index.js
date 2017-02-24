import axios from 'axios';
import { store } from '../reducers/';

export function getHeroImages() {
  const request = axios.get('/api/heroData/images');
  return {
    type: 'GET_HERO_IMAGES',
    payload: request,
  };
}

export function getHeroAttributes(id) {
  const request = axios.get(`/api/heroData/${id}`);
  return {
    type: 'ADD_HERO_TO_LINEUP',
    payload: request,
  };
}
