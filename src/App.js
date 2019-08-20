import React from 'react';
import { Router } from '@reach/router';
import Landing from './Landing';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Landing path="/" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
