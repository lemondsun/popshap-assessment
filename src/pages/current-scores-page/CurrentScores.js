import React, { useState, useEffect } from 'react';
import CustomTitle from '../../components/custom-title/CustomTitle';
import ScoresList from '../../components/scores-list/ScoresList';
import CustomButton from '../../components/custom-button/CustomButton';

import { getScores } from '../../utils/apiHelper';

function CurrentScores({pageFocus,setPageFocus}) {
  const [scores, setScores] = useState(null);

  useEffect(() => {
    let scores;
    const scoresApiCall = async () => {
      let data = await getScores();
      scores = data;
    };
    scoresApiCall().then(() => {
      setScores(scores);
    });
  }, []);



  return (
    <div className="current-scores-page">
      <CustomTitle useCase={'list'} />
      {/*To avoid any loading errors, 
      I check to make sure scores are loaded before this DOM element 
      is called.
         */
        scores!==null && <ScoresList scores={scores} /> 
      }
      <CustomButton pageFocus={pageFocus} setPageFocus={setPageFocus}>Add a Score</CustomButton>
    </div>
  );
}

export default CurrentScores;
