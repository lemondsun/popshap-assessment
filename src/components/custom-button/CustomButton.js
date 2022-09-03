import React from 'react';
import './custom-button.styles.scss';

function CustomButton({ children, pageFocus, setPageFocus }) {
  return (
    <button
      className={pageFocus === 'showScores' ? 'scores-button' : 'submit-button'}
      onClick={() => pageFocus === 'showScores' && setPageFocus('addScore')}
      type={pageFocus === 'showScores' ? 'button' : 'submit'}
    >
      <p className="button-text">{children}</p>
    </button>
  );
}

export default CustomButton;
