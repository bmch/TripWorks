import React, { Component } from 'react';
// import { `${this.props.icon}.png` } from './icons'

class Box extends Component {

  render() {
    return (
      <div>
        <h1>TODAYS WEATHER</h1>
        <p className="city">{this.props.city}</p>
        <p className="icon">{this.props.icon}</p>
        <p className="temp">{this.props.weather}</p>
        <p className="desc">{this.props.desc}</p>
        <p className="date">{this.props.date}</p>
      </div>
    );
  }
}

export default Box;

{/* <img src={icon} alt="weather icon" ></img> */ }

