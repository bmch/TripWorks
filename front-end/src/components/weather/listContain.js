import React, { Component } from 'react';
import FBox from './fBox';

class ListContain extends Component {
  state = {  }
  render() { 
    return ( 
      this.props.forecast.map((e) => (
        
        <FBox e={e}/>
        
        ))
     );
  }
}
 
export default ListContain;