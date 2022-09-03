import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import CurrentScores from './pages/current-scores-page/CurrentScores';
import AddScore from './pages/add-score/AddScore';

function App() {
  const [pageFocus, setPageFocus] = useState('showScores');
  const useSetStateFunction =(focus)=> setPageFocus(focus)

  return (
    <div className="App">
      <Header />
      {pageFocus === 'showScores' ? <CurrentScores pageFocus={pageFocus} setPageFocus={useSetStateFunction}/> : <AddScore pageFocus={pageFocus} setPageFocus={useSetStateFunction}/>}
    </div>
  );
}

export default App;
