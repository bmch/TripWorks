// import React, { Component } from 'react';
// import './userProfile.css';
// import { useState, useEffect } from 'react';
// import apiClient from '../../services/user/apiClient';

// export default function UserProfile() {
//   const [trips, setTrips] = useState([]);
//   console.log("TCL: UserProfile -> trips", trips)
  
  
//   // useEffect(() => {
//   //   // updateTrips();
//   //   apiClient.getUserTrips().then(data => {
//   //     setTrips(data);
//   //   });
//   // }, []);

//   // const updateTrips = () => {
//   //   apiClient.getUserTrips().then(data => {
//   //     setTrips([...data]);
//   //   });
//   // };

//   return (
//     <div className="wrapperProfile">
//       <div className="avatar_wrapper">
//         <div class="avatar">
//           <img
//             src="https://picsum.photos/id/1011/500/500"
//             class="avatar__image"
//           />
//           <h2>Erin Costello</h2>
//         </div>
//       </div>

//       <div className="trips">
//         <h3>Trips</h3>
//         {trips.length &&
//           trips.map((destination, key) => (
//             <div key={key}>
//               <p>{destination.savedtrips.city}</p>
//               <p>{destination.savedtrips.finalScore.toFixed(2)}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

import React, { Component } from 'react';
import './userProfile.css';
import { useState, useEffect } from 'react';
import apiClient from '../../services/user/apiClient';

export default function UserProfile() {
  const [trips, setTrips] = useState([]);

  // useEffect(() => {
  //   updateTrips();
  // }, []);

  // const updateTrips = () => {
  //   apiClient.getUserTrips().then(data => {
  //     setTrips([...data]);
  //   });
  // };

  return (
    <div className="wrapperProfile">
      <div className="avatar_wrapper">
        <div class="avatar">
          <img
            src="https://picsum.photos/id/1011/500/500"
            class="avatar__image"
          />
          <h2>Erin Costello</h2>
        </div>
      </div>

      {/* <div className="trips">
        <h3>Trips</h3>
        {trips.length &&
          trips.map((destination, key) => (
            <div key={key}>
              <p>{destination.savedtrips.city}</p>
              <p>{destination.savedtrips.finalScore.toFixed(2)}</p>
            </div>
          ))}
      </div> */}
      <div className="trips container">
        <img src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <div class="bottom-left">New York</div>
      </div>

      <div className="trips container">
        <img src="https://images.unsplash.com/photo-1524168272322-bf73616d9cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        <div class="bottom-left">Chicago</div>
      </div>

      <div className="trips container">
        <img src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <div class="bottom-left">Venice</div>
      </div>

      <div className="trips container">
        <img src="https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <div class="bottom-left">Shanghai</div>
      </div>
    </div>
  );
}