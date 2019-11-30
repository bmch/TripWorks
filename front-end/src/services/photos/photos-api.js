export default {
  getPhotos: ({ destination1, destination2 }) => {
    console.log('destination1', destination1);
    console.log('destination2', destination2);
    const GET_PHOTOS_URL = `https://api.unsplash.com/search/photos/?page=1&per_page=2&query=${destination1}&client_id=719eed5c332ba06ecc47b07762387775e4ceaeffd3f85eaaf0d26a27979c1448`;

    return fetchRequest(GET_PHOTOS_URL).then(res => {
      console.log('result of get photos', res);
      return res;
    });
  }
};

const fetchRequest = url => {
  console.log('TCL: fetchRequest -> url', url);
  return fetch(url)
    .then(res => (res.status <= 400 ? res : Promise.reject(res)))
    .then(res => res.json())
    .then(res => {
      console.log('photo result =>', res);
      return res;
    })
    .catch(error => {
      console.log(`${error.message} while fetching ${url}`);
    });
};
