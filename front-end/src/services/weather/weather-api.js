import {fetchDataWeather} from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/actions/weather.js'
const API_KEY = '507f99b36b18468a85916df5f0db3a25'
export const getWeather = (city) => {
   return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}`)
    .then(response => response.json())
  // return 
  // function (dispatch) {
    
    
      // .then(info => {
      //   //response.data is the array of users
      //   const weather = info.data
      
      // })    
  // }
}

// export default { 
//   getFlights: async () => {

//       return await fetchRequest();
  
// }

// const fetchRequest = (url, options) => {
//   return fetch(url, options)
//     .then(res => res.status <= 400 ? res : Promise.reject(res))
//     .then(res => res.json())
//     .catch((err) => {
//       console.log(`${err.message} while fetching /${url}`)
//     });
// }


// const fetchWeather = (url, options) => {
//   return fetch(url, options)
//     .then(res => res.status <= 400 ? res : Promise.reject(res))
//     .then(res => res.json())
//     .catch((err) => {
//       console.log(`${err.message} while fetching /${url}`)
//     });
// }
// .catch(error => {
      //   // error.message is the error description
      //   dispatch(fetchUsersFailure(error.message))
      // })



      // export default getWeather = (city) => {
      //   const API_KEY = '507f99b36b18468a85916df5f0db3a25'
      //   fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}`)
      //     .then(response => response.json())
      //     .then(info => {
      
      //       for (let i = 0; i < info.data.length; i++) {
      //         // console.log(info.data[i].valid_date)
      //         // console.log(this.state.start)
      //         if (info.data[i].valid_date === this.state.start) {
      
      //           this.setState(() => ({
      //             city: info.city_name,
      //             icon: info.data[i].weather.icon,
      //             weather: info.data[i].temp,
      //             desc: info.data[i].weather.description,
      //             date: info.data[i].valid_date,
      //             forecast: info.data
      //           }))
      //         }
      //       }
      //     })
      // }
      