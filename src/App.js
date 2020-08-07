import React from 'react';
import Days from './Days'
import Weather from './Weather'
import Header from './Header'

function App() {

  // const dateBuilder = (d) => {
  //   let months = ["January", "February", "March", "April", "May", "June", "July", "August",
  //   "September", "October", "November", "December"]
  //   let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  //   "Sunday"]

  //   let day = days[d.getDay()]
  //   let date = d.getDate()
  //   let month = months[d.getMonth()]
  //   let year = d.getFullYear()

  //   return `${day} ${date} ${month} ${year}`
  // }

  return (
    <div className="App">
        <Header />
        <div className="row">
          <div className="col s12 m6 push-m3">
              <div className="weather card blue-grey darken-1">
                    <Weather />
                    <Days />
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
