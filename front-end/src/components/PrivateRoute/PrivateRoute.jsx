import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         localStorage.getItem('user')
//             ? <Component {...props} />
//             : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//     )} />
// )

export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
      localStorage.getItem('user') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}