export const weather = (state = [], action) => {
  // console.log(action)
  switch(action.type) {
      case 'SET_WEATHER':
          console.log(action.data)
          return action.data
      default:
          return state;
  }
}

export default flights;