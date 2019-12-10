export const flights = (state = [], action) => {
  // console.log(action)
  switch(action.type) {
      case 'SET_FLIGHTS':
          return action.data
      default:
          return state;
  }
}

export default flights;