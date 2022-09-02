import React from 'react';
import './custom-button.styles.scss';

function CustomButton(props) {
  return (
    <div>
      {
        /*Scores value from the prop useCase dictates how the button is
        styled and utilized.
        It either changes the focus of the app or submits a score.
         */
        props.useCase === 'scores' ? (
        <button
          className="custom-button"
          onClick={() => props.setPageFocus('submit')}
          type="button"
        >
          <p className="button-text">Add a Score</p>
        </button>
      ) : (
        <button className="custom-button submit" type="submit">
          <p className="button-text">Sumbit</p>
        </button>
      )}
    </div>
  );
}

export default CustomButton;
