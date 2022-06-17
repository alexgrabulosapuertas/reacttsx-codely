import React from 'react';
import './App.css';
import './assets/scss/styles.scss';
import { Router } from './components/Router';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar /> 
      <Router />
    </>
  );
}

export default App;
