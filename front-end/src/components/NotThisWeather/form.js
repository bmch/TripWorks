// import React, { Component } from 'react';

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       city: '',
//       start: '',
      
    
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // this.setState({ [event.target.name]: event.target.value })
//     this.props.getWeather(this.state.city)

//   }

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value })
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <label>Enter City:</label>
//           <input 
//             name="city" 
//             type="text" 
//             value={this.state.city}
//             onChange={this.handleChange}
//           /><br />
//           <label>Enter Start Date:</label>
//           <input 
//             name="start" 
//             type="text" 
//             value={this.state.start}
//             onChange={this.handleChange}
//           /><br />
//           <input 
//             className="weather-submit" 
//             type="submit" 
//             value="Get Weather" 
//             onClick={this.handleSubmit}
//           />
//         </form>
//       </div>);
//   }
// }

// export default Form;