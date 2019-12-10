export const photos = (state = [], action) => {
  switch (action.type) {
    case 'SET_PHOTOS':
      return action.data;
    default:
      return state;
  }
};

export default photos;
