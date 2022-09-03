import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import CurrentScores from './pages/current-scores-page/CurrentScores';
import AddScore from './pages/add-score/AddScore';

function App() {
  const [pageFocus, setPageFocus] = useState('showScores');
  const useSetStateFunction = (focus) => setPageFocus(focus);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <CurrentScores
              pageFocus={pageFocus}
              setPageFocus={useSetStateFunction}
            />
          }
        />
        <Route
          path="/addscore"
          element={
            <AddScore
              pageFocus={pageFocus}
              setPageFocus={useSetStateFunction}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
