import React, { Component } from 'react';
// import { `${this.props.icon}.png` } from './icons'

class FBox extends Component {

  render() {
    return (
      <div>
        <h1>TODAYS WEATHER</h1>
        <p className="city">{this.props.e.city_name}</p>
        <p className="icon">{this.props.e.weather.icon}</p>
        <p className="temp">{this.props.e.temp}</p>
        <p className="desc">{this.props.e.weather.description}</p>
        <p className="date">{this.props.e.valid_date}</p>
      </div>
    );
  }
}


export default FBox;