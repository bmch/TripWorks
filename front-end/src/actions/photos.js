import photosAPI from '../services/photos/photos-api';

export const fetchPhotos = formData => dispatch => {
  console.log('fetch photo fired');
  console.log('... with form data=>', formData);
  return photosAPI.getPhotos(formData).then(photoList => {
    dispatch({
      type: 'SET_PHOTOS',
      data: photoList
    });
  });
};
