import React from 'react';
import { SchoolContextProvider } from "./context/GlobalContext"
import Header from './components/Header/index';
// import './App.css';

function App() {
  return (
    <SchoolContextProvider>
      <Header />
    </SchoolContextProvider>
  );
}

export default App;
