import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import Box from '@material-ui/core/Box';
import Icon from '/Users/erincostello/Desktop/Tripz/TripWorks/front-end/src/components/weather/icons/a01d.png'

const Test = () => {
  
    return ( 
      <div style={{ width: '100%', display: 'flex' }}>
      <Box component="div" style={{display: "inline"}} p={1} m={7} boxShadow={3} style={{backgroundColor: "white"}}>
        <p>DATE</p>
        <p>ICON</p>
        <p>TEMP</p>
        <p>DESCRIPTION</p>
      </Box>
      <Box component="div" style={{display: "inline"}} p={1} m={7} boxShadow={3} style={{backgroundColor: "white"}}>
        <p>DATE</p>
        <div><img src={Icon} /></div>
        <p>TEMP</p>
        <p>DESCRIPTION</p>
      </Box>
      <Box component="div" style={{display: "inline"}} p={1} m={7} boxShadow={3} style={{backgroundColor: "white"}}>
        <p>DATE</p>
        <p>ICON</p>
        <p>TEMP</p>
        <p>DESCRIPTION</p>
      </Box>
      {/* <Box component="div" style={{display: "inline"}} p={1} m={7} style={{backgroundColor: "red"}}>
        <p>DATE</p>
        <p>ICON</p>
        <p>TEMP</p>
        <p>DESCRIPTION</p>
      </Box>
      <Box component="div" style={{display: "inline"}} p={1} m={7} style={{backgroundColor: "red"}}>
        <p>DATE</p>
        <p>ICON</p>
        <p>TEMP</p>
        <p>DESCRIPTION</p>
      </Box>
      <Box component="div" style={{display: "inline"}} p={1} m={7} style={{backgroundColor: "red"}}>
        <p>DATE</p>
        <p>ICON</p>
        <p>TEMP</p>
        <p>DESCRIPTION</p>
      </Box>
      <Box component="div" style={{display: "inline"}} p={1} m={7} style={{backgroundColor: "red"}}>
        
        <p>DATE</p>
        <p>ICON</p>
        <p>TEMP</p>
        <p>DESCRIPTION</p>
      </Box>
      <Box component="div" style={{display: "inline"}} p={1} m={7} style={{backgroundColor: "red"}}>
        
        <p>DATE</p>
        <p>ICON</p>
        <p>TEMP</p>
        <p>DESCRIPTION</p>
      </Box>
      <Box component="div" style={{display: "inline"}} p={1} m={7} style={{backgroundColor: "red"}}>
        
        <p>DATE</p>
        <p>ICON</p>
        <p>TEMP</p>
        <p>DESCRIPTION</p>
      </Box>
      <Box component="div" style={{display: "inline"}} p={1} m={7} style={{backgroundColor: "red"}}>
      
        <p>DATE</p>
        <p>ICON</p>
        <p>TEMP</p>
        <p>DESCRIPTION</p>
      </Box>
      <Box component="div" style={{display: "inline"}} p={1} m={7} style={{backgroundColor: "red"}}>
        
        <p>DATE</p>
        <p>ICON</p>
        <p>TEMP</p>
        <p>DESCRIPTION</p>
      </Box>
      <Box component="div" style={{display: "inline"}} p={1} m={7} style={{backgroundColor: "red"}}>
        
        <p>DATE</p>
        <p>ICON</p>
        <p>TEMP</p>
        <p>DESCRIPTION</p>
      </Box> */}
      </div>
      
     );
  
}
 
export default Test;