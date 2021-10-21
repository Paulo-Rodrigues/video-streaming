import React from 'react';
import GlobalStyles from './theme/GlobalStyles';
import Slider from './components/Slider';

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
        <Slider />
      </div>
    </>
  );
}

export default App;
