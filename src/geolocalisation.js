import React, { useEffect } from "react";

const Geoloc = (props) => {
  
  const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        return "Geolocation is not supported by this browser"
    }
  }

  const showPosition = (position) => {
      props.setCoords({
          lat:position.coords.latitude,
          lon: position.coords.longitude
      })
  }
  
  useEffect(() => {
    getLocation()
  }, [])

  return(
    <div>
      Longitude : {props.coords.lon}, 
      Latitude :  {props.coords.lat}
    </div>
  )
}

  

  export default Geoloc;