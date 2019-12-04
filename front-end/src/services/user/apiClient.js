import { authHeader } from '../../helper/auth_header';
const BASE_URL = `http://localhost:3002`;

export default {

  postUser(inputs) {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    };

    return fetch(`${BASE_URL}/register`, option)
      .then(handleResponse)
      .then(user => {
        localStorage.setItem('user', JSON.stringify(user));

        return user;
      });
  },

  logUserIn(inputs) {
    const option = {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + btoa(`${inputs.username}:${inputs.password}`)
      },
      body: JSON.stringify(`${inputs.username}:${inputs.password}`)
    };

    return fetch(`${BASE_URL}/login`, option)
      .then(handleResponse)
      .then(user => {
        localStorage.setItem('user', JSON.stringify(user));

        return user;
      });
  },
  postUserTrips(destination) {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(destination)
    };
    return fetch(`${BASE_URL}/savedtrips`, option)
      .then(handleResponse)
      .then(data => {
        return data;
      });
  },
  
  getUserTrips() {
    return fetch(`${BASE_URL}/savedtrips`)
      .then(handleResponse)
      .then(data => {
        return data;
      });
  }
};

function logout() {
  localStorage.removeItem('user');
}

const fetchRequest = (url, option) => {
  return fetch(`${BASE_URL}${url}`, option)
    .then(res => (res.status <= 404 ? res : Promise.reject(res)))
    .then(res => res.json())
    .catch(error => {
      console.log(`${error.message} while fetching ${url}`);
    });
};

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
