const API_KEY = '507f99b36b18468a85916df5f0db3a25'
export const getWeather = (city) => {
    console.log(`fetching ${city} weather`)
   return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}`)
    .then(response => {
        if (!response) return null
        else return response.json()
    })

}
