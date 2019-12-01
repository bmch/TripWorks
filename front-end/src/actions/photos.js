import photosAPI from '../services/photos/photos-api';

export const fetchPhotos = async (formData) => {
  console.log('fetch photo fired');
  const destination = formData.destination

  const [landscape, portrait] = await Promise.all([photosAPI.getPhotos(destination, 'landscape'), photosAPI.getPhotos(destination, 'portrait')])

  console.log('landscape', landscape)
  // console.log('portrait', portrait)

  const photos = {
    ldscFull: landscape.results.map(photoInfo => {
      return photoInfo.urls.full
    }),
    ldscSmall: landscape.results.map(photoInfo => {
      return photoInfo.urls.small
    }),
    portFull: portrait.results.map(photoInfo => {
      return photoInfo.urls.full
    }),
    portSmall: portrait.results.map(photoInfo => {
      return photoInfo.urls.small
    })
  }

  console.log('photos', photos)
  return photos
};
