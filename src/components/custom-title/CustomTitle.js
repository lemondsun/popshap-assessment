import React from 'react';
import './custom-title.styles.scss';

function CustomTitle({ useCase }) {
  return (
    <div className="title-box">
      <h1 className="custom-title">
        {
          // dynamic text based on the titles use case
          useCase === 'list' ? 'Current Scores.' : 'Add a Score.'
        }
      </h1>
    </div>
  );
}

export default CustomTitle;
