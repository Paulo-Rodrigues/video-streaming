import React from 'react';
import GlobalStyles from './theme/GlobalStyles';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Banner />
    </>
  );
}

export default App;
