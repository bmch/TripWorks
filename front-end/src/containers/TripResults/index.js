
// <<<<<<< HEAD
// <<<<<<< HEAD
// // import React from 'react';
// // import {bindActionCreators} from 'redux';
// // import { connect } from 'react-redux';
// // import {fetchData, fetchDataFlights} from '../../actions';
// // import { rootURL } from '../../constants';

// import React, { useEffect } from "react";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { fetchDataFlights } from "../../actions/flights";
// import { fetchHotelData } from "../../actions/hotels";


// const TripResults = () => {  
//   const destination = useSelector(state => state.form.userInput.values); 
//   console.log(destination);

//     const hotelCity = useSelector(state => state.getCityId);

//     const flights = useSelector(state => state.flights);
//     const dispatch = useDispatch();


//     useEffect( () => {
//         dispatch(fetchDataFlights())
//         dispatch(fetchHotelData())
      
// 	}, [])


//   return (
//     <div>
//         <div>TEST</div>
//         {/* <div>{ JSON.stringify(flights) }</div>    */}
//         <div>{JSON.stringify(hotelCity)}</div>
// =======
// import './TripResults.css';
// import React, { useEffect } from 'react';
// import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import { fetchDataFlights } from '../../actions/flights';
// import { fetchHotelData } from '../../actions/hotels';
// // import hotels from './hotel.json';
// ​
// const TripResults = () => {
//   const destination = useSelector(state => state.form.userInput.values);
//   const form = useSelector(state => state.form.userInput.values);
// =======
// import React, { useEffect } from "react";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";

// // import 'TripResults.css'

// const TripResults = () => {  

// >>>>>>> cd4253fa0858bc5f78d9d1caea1dfd8457b738b0
//   const hotelAPIresults = useSelector(state => state.getCityId);
//     // const form = useSelector(state => state.form.userInput.values); 
//     //const hotels = useSelector(state => state.cityId);
//     // const flights = useSelector(state => state.flights);
//     // const dispatch = useDispatch();
//   return (
//     <div>
//       {/* <div>
//         {hotelAPIresults.result &&
//           hotelAPIresults.result.map(hotel => (
//             <div className="result" key={hotel.id}>
//               <div className="img-div">
//                 <img src={hotel.main_photo_url} />
//               </div>

//               <div className="mid-div">
//                 <div className="hotel-name">Hotel Name: {hotel.hotel_name}</div>
//                 <div className="hotel-address">{hotel.address}</div>
//               </div>

//               <div className="price-div">
//                 <div>
//                   {hotel.price_breakdown &&
//                     'Price: $' + hotel.price_breakdown.gross_price}
//                 <div>
//                   {hotel.facilities_review_score &&
//                     'Fa
//                 </div>cilities review score: ' +
//                       hotel.facilities_review_score.rating}
//                 </div>
//               </div>

//               <a href={hotel.url}>Click here to book</a>
//             </div>
//           ))}
// <<<<<<< HEAD
//       </div>
// >>>>>>> 78aa0547646ca82a5b51952cb860e2b9efafd4d5
// =======
//       </div> */}
//       {/* <div>
//         {photos.results &&
//           photos.results.map(img => (
//             <div
//               className="destination-photo"
//               // style={{ backgroundImage: 'url(' + img.urls.regular + ')' }}
//             >
//               <img src={img.urls.regular} alt="" />

//               <div className="bottom-left">{form && form.destination1}</div>
//             </div>
//           ))}
//       </div> */}
// >>>>>>> cd4253fa0858bc5f78d9d1caea1dfd8457b738b0
//     </div>
//   );
// };

// export default TripResults;
