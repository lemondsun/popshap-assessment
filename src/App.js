import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import CurrentScores from './pages/current-scores-page/CurrentScores';
import AddScore from './pages/add-score/AddScore';

function App() {
  const [pageFocus, setPageFocus] = useState('scores');
  return (
    <div className="App">
      <Header />
      {pageFocus === 'scores' ? <CurrentScores useCase={pageFocus} setPageFocus={setPageFocus}/> : <AddScore useCase={pageFocus} setPageFocus={setPageFocus}/>}
    </div>
  );
}

export default App;
