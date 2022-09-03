import React from 'react';
import './scores-list.styles.scss';

function ScoresList({ scores }) {
  /*sorting the scores so I can loop through them in descending order */
  const sortedScores = scores.sort((a, b) => b.scores - a.scores);

  /*To avoid having to repeatedlly write out this code for
  every word in the "score-box" I made a function I can call.
  */
  const makeCapitialized = (string) => {
    if (string !== null) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else if (string === null) {
      return '';
    }
  };

  const listOfScores = sortedScores.map((score, index) =>
    index % 2 === 0 ? (
      <p className="score-box-even" key={index}>
        <span className="score-box-even-text">
          {index + 1}. {makeCapitialized(score.firstName)}{' '}
          {score.lastName === null
            ? ''
            : makeCapitialized(score.lastName.charAt(0))}
          .
        </span>
        <span className="score-numbers">{score.scores}</span>
      </p>
    ) : (
      <p className="score-box-odd" key={index}>
        <span className="score-box-odd-text">
          {index + 1}. {makeCapitialized(score.firstName)}{' '}
          {score.lastName === null
            ? ''
            : makeCapitialized(score.lastName.charAt(0))}
          .
        </span>
        <span className="score-numbers">{score.scores}</span>
      </p>
    )
  );
  return <div className="list-of-scores">{listOfScores}</div>;
}

export default ScoresList;
