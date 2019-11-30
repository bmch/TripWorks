
export const getCityId = (state = [], action) => {
  switch(action.type) {
      case 'SET_HOTELS':
          return action.data
      default:
          return state;
  }
}

// export default (state = INITIAL_STATE, action) => {
//   switch(action.type) {
//     case 'GET_CITY_ID':
//         return getCityId(state, );
//     default:
//         return state;
//   }
// }

export default getCityId;