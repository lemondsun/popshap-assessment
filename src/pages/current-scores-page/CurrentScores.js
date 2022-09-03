import React, { useState, useEffect } from 'react';
import CustomTitle from '../../components/custom-title/CustomTitle';
import ScoresList from '../../components/scores-list/ScoresList';
import CustomButton from '../../components/custom-button/CustomButton';

import { getScores } from '../../utils/apiHelper';

function CurrentScores(props) {
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
    console.log(scores)
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
      <CustomButton useCase={props.useCase} setPageFocus={props.setPageFocus} />
    </div>
  );
}

export default CurrentScores;
