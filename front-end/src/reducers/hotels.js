const INITIAL_STATE = {
  cityId: [],
}

export const getCityId = (state = INITIAL_STATE, action) => {
  switch(action.type) {
      case 'GET_CITY_ID':
          return action.data
      default:
          return state;
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_CITY_ID':
        return getCityId(state, );
    default:
        return state;
  }
}

// export default getCityId;