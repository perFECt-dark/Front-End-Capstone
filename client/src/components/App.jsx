import React from 'react';
import Reviews from './Reviews.jsx';

const App = () => {

  return (
    <div>
      <header className="primary-header container group" style={{backgroundColor: 'blue'}}>

        <h1 className="logo">
            <a href="index.html">Perfect<br></br>Dark</a>
        </h1>

        <h3 className="tagline">_______________ Search</h3>

      </header>
      <Reviews />
  </div>
  );

};

export default App;