import React from 'react';
import './alert-modal.styles.scss';

function AlertModal(props) {
  return (
    <div
      className="alert-screen-background"
      onClick={() => props.setModalState(!props.modalState)}
    >
      <div className="alert-modal">
     
        Please fill out the entire form before submitting<br></br>
        with no special characters in the inputs
          or click the button below to go back to the scores list.
    
      </div>
    </div>
  );
}

export default AlertModal;
