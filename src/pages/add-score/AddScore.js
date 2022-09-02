import React, { useState } from 'react';
import CustomTitle from '../../components/custom-title/CustomTitle';
import CustomInput from '../../components/custom-input/CustomInput';
import CustomButton from '../../components/custom-button/CustomButton';

import { createScore } from '../../utils/apiHelper';

function AddScore(props) {
  const [scoreData, setScoreData] = useState({
    firstName: '',
    lastName: '',
    score: 0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setScoreData({ ...scoreData, [name]: value });
  };

  const handleSumbit = async (event) => {
    event.preventDefault();
    try {
      createScore(scoreData);
    } catch (error) {
      console.error(error);
    }
    props.setPageFocus('scores');
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
        <CustomButton
          useCase={props.useCase}
          setPageFocus={props.setPageFocus}
        />
      </form>
    </div>
  );
}

export default AddScore;
