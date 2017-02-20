export default function (state = [], action) {
  switch (action.type) {
    case 'GET_HERO_DATA':
      return action.payload.data;
    default:
      return state;
  }
}
