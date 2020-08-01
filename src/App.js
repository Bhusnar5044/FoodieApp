import React, { Component,useState,useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import SearchBar from './components/Sidebar/LocationSearch/SearchBar';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <SearchBar/>
      </div>
  );
}

export default App;