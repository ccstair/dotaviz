export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_HERO_TO_LINEUP':
    if(state.length < 5) {
      for(let i = 0; i < state.length; i++) {
        if(state[i].id === action.payload.data.id) {
          return state;
        }
      }
      return [...state, action.payload.data];
    } else {
      for(let i = 0; i < state.length; i++) {
        if(state[i].id === action.payload.data.id) {
          return state;
        }
      }
      state.pop();
      return [...state, action.payload.data];
      }
    default:
      return state;
  }
}
