export const weather = (state = [], action) => {
  switch(action.type) {
      case 'SET_WEATHER':
          return action.data
      default:
          return state;
  }
}

export default flights;