import React, { Component } from 'react';
import Box from './box';
import Form from './form'
import ListContain from './listContain';
//dec 7th - 10th


class Weather extends Component {
  state = {
    city: '',
    icon: '',
    weather: [],
    desc: '',
    date: '',
    start: '',
    end: '',
    forecast: []
  }

  getWeather = (city) => {
    const API_KEY = '507f99b36b18468a85916df5f0db3a25'
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}`)
      .then(response => response.json())
      .then(info => {

        for (let i = 0; i < info.data.length; i++) {
          // console.log(info.data[i].valid_date)
          // console.log(this.state.start)
          if (info.data[i].valid_date === this.state.start) {

            this.setState(() => ({
              city: info.city_name,
              icon: info.data[i].weather.icon,
              weather: info.data[i].temp,
              desc: info.data[i].weather.description,
              date: info.data[i].valid_date,
              forecast: info.data
            }))           
          }
        }      
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.setState({ [event.target.name]: event.target.value })
    this.getWeather(this.state.city)

  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <form>
          <label>Enter City:</label>
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleChange}
          /><br />
          <label>Enter Start Date:</label>
          <input
            name="start"
            type="text"
            value={this.state.start}
            onChange={this.handleChange}
          /><br />
          <label>Enter End Date:</label>
          <input
            name="end"
            type="text"
            value={this.state.end}
            onChange={this.handleChange}
          /><br />
          <input
            className="weather-submit"
            type="submit"
            value="Get Weather"
            onClick={this.handleSubmit}
          />
        </form>

        <Box
          city={this.state.city}
          icon={this.state.icon}
          weather={this.state.weather}
          desc={this.state.desc}
          date={this.state.date}
        />

        <ListContain
          forecast={this.state.forecast} />
      </div>
    );
  }
}

export default Weather;