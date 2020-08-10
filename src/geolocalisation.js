import React from "react";
// import Weather from "./Weather";
// import { render } from "react-dom";

const Geoloc = () => {
  
    const componentDidMount = () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  
    
    return (
        <div>
            {/* <Weather long={position.coords.longitude} lat={position.coords.latitude}/>  */}
        </div>
    );
}
  

  export default Geoloc;