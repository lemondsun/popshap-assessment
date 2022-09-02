import React from 'react';
import './scores-list.styles.scss';

function ScoresList(props) {
  const listOfScores = props.scores.map((score, index) => (
    <p>
      {index + 1}. {score.firstName} {score.lastName}
    </p>
  ));
  return <div>{listOfScores}</div>;
}

export default ScoresList;
