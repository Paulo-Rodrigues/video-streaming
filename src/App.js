import React from 'react';
import GlobalStyles from './theme/GlobalStyles';
import Card from './components/Card';
import Jurassic from './assets/images/jurassic.png';
import Madmax from './assets/images/madmax.png';
import Rocky from './assets/images/rocky.png';

function App() {
  return (
    <>
      <GlobalStyles />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card image={Jurassic} />
        <Card image={Madmax} />
        <Card image={Rocky} />
      </div>
    </>
  );
}

export default App;
