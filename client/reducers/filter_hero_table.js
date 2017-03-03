export default function (state = [], action) {
  switch (action.type) {
    case 'FILTER_HERO_TABLE':
      return action.payload;
    default:
      return state;
  }
}
