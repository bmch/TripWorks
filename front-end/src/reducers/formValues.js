export const formValues = (state = {}, action) => {
  console.log('form value action started ', action);
  switch (action.type) {
    case 'SET_FORM_VALUES':
      console.log('saving form to store', action.data);
      return action.data;
    default:
      return state;
  }
};

export default formValues;
