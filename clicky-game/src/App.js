import React from 'react';
import {GameProvider, Header, TileSpace} from './components';
function App() {
  return (
    <GameProvider>    
      <Header />
      <TileSpace />
    </GameProvider>
  )
}

export default App;
