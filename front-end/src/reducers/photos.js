export const photos = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case 'SET_PHOTOS':
      // console.log(action.data)
      return action.data;
    default:
      return state;
  }
};

export default photos;
