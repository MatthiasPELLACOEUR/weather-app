import React from 'react';
import Days from './Days'
import Weather from './Weather'
import Header from './Header'

function App() {

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
