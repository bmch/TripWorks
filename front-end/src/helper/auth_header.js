export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
      return { 'Authorization': 'Bearer ' + user.token };
  } else {
      return {};
  }
}

export function authHeaderMid() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.jwt) {
      return `Bearer ${user.jwt}`
  } else {
      return '';
  }
}