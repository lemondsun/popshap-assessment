import React from 'react';
import './scores-list.styles.scss';

function ScoresList(props) {
  /*To avoid having to repeatedlly write out this code for
  every word in the "score-box" I made a function I can call.
  */
  const makeCapitialized = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  const listOfScores = props.scores.map((score, index) =>
    index % 2 === 0 ? (
      <p className="score-box-even">
        <span className="score-box-even-text">
          {index + 1}. {makeCapitialized(score.firstName)}{' '} 
          {makeCapitialized(score.lastName.charAt(0))}.
        </span>
        <span className="score-numbers">{score.scores}</span>
      </p>
    ) : (
      <p className="score-box-odd">
        <span className="score-box-odd-text">
          {index + 1}. {makeCapitialized(score.firstName)}{' '} 
          {makeCapitialized(score.lastName.charAt(0))}.
        </span>
        <span className="score-numbers">{score.scores}</span>
      </p>
    )
  );
  return <div className="list-of-scores">{listOfScores}</div>;
}

export default ScoresList;
