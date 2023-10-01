import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import './app.css'
import { Main } from './components/main';

function App() {
  return (
    <div className="wrapper">
      {/*header */}
      <Header />
      {/* cards */}
      <Main/>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;