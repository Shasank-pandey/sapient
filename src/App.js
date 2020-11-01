import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './Filter'

function App() {
  return (
    <div className="App bg-light">
      <h2 className="align-left head-text">SpaceX Launch Programs</h2>
      <div className="container col-lg-12 col-sm-12 row">
        <Filter  className="col-md-3 col-lg-3"></Filter>
      </div>
    </div>
  );
}

export default App;
