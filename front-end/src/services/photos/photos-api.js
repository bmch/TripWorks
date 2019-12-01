export default {
  getPhotos: (destination, orientation) => {
    console.log(destination, orientation);
    // console.log('destination2', destination2);
    const GET_PHOTOS_URL = `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${destination}&orientation=${orientation}&client_id=719eed5c332ba06ecc47b07762387775e4ceaeffd3f85eaaf0d26a27979c1448`;
    return fetchRequest(GET_PHOTOS_URL)
  }
};

const fetchRequest = url => {
  console.log('TCL: fetchRequest -> url', url);
  return fetch(url)
    .then(res => (res.status <= 400 ? res : Promise.reject(res)))
    .then(res => res.json())
    .catch(error => {
      console.log(`${error.message} while fetching ${url}`);
    });
};
