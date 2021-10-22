import React from 'react';
import GlobalStyles from './theme/GlobalStyles';
import Slider from './components/Slider';
import Jurassic from './assets/images/jurassic.png';
import MadMax from './assets/images/madmax.png';
import Rocky from './assets/images/rocky.png';

const ImageData = [
  {
    image: Jurassic,
  },
  {
    image: MadMax,
  },
  {
    image: Rocky,
  },
  {
    image: Jurassic,
  },
  {
    image: MadMax,
  },
  {
    image: Rocky,
  },
  {
    image: Jurassic,
  },
  {
    image: MadMax,
  },
  {
    image: Rocky,
  },
  {
    image: Jurassic,
  },
  {
    image: MadMax,
  },
  {
    image: Rocky,
  },
  {
    image: Jurassic,
  },
  {
    image: MadMax,
  },
  {
    image: Rocky,
  },
  {
    image: Jurassic,
  },
  {
    image: MadMax,
  },
  {
    image: Rocky,
  },
  {
    image: Jurassic,
  },
  {
    image: MadMax,
  },
  {
    image: Rocky,
  },
];

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
        <Slider slides={ImageData} />
      </div>
    </>
  );
}

export default App;
