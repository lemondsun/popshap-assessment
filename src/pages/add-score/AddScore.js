import React, { useState } from 'react';
import CustomTitle from '../../components/custom-title/CustomTitle';
import CustomInput from '../../components/custom-input/CustomInput';
import CustomButton from '../../components/custom-button/CustomButton';

import { createScore } from '../../utils/apiHelper';
import AlertModal from '../../components/alert-modal/AlertModal';

function AddScore(pageFocus, setPageFocus) {
  const [modalState, setModalState] = useState(false);
  const [scoreData, setScoreData] = useState({
    firstName: null,
    lastName: null,
    score: null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setScoreData({ ...scoreData, [name]: value });
  };

  const handleSumbit = async (event) => {
    event.preventDefault();

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    for (const element in scoreData) {
      scoreData[element] === null && setModalState(true);
      specialChars.test(scoreData[element]) === true && setModalState(true);
    }
    // try {
    //   createScore(scoreData);
    // } catch (error) {
    //   console.error(error);
    // }
    // setPageFocus('showScores');
  };

  return (
    <div>
      <CustomTitle uscCase={'add'} />
      <form onSubmit={handleSumbit}>
        <CustomInput
          handleChange={handleChange}
          label={'First name'}
          name={'firstName'}
          defaultValue={'Type Here...'}
          type={'text'}
        />
        <CustomInput
          label={'Last name'}
          handleChange={handleChange}
          name={'lastName'}
          defaultValue={'Type Here...'}
          type={'text'}
        />
        <CustomInput
          label={'Score'}
          handleChange={handleChange}
          name={'score'}
          defaultValue={'0'}
          type={'number'}
        />
        <CustomButton useCase={pageFocus} setPageFocus={setPageFocus}>
          Submit
        </CustomButton>
      </form>
      {modalState === true && (
        <AlertModal modalState={modalState} setModalState={setModalState} />
      )}
    </div>
  );
}

export default AddScore;
