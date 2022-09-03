import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomTitle from '../../components/custom-title/CustomTitle';
import CustomInput from '../../components/custom-input/CustomInput';
import CustomButton from '../../components/custom-button/CustomButton';

import { createScore } from '../../utils/apiHelper';

function AddScore({ pageFocus, setPageFocus }) {
  const navigate = useNavigate();
  const [scoreData, setScoreData] = useState({
    firstName: '',
    lastName: '',
    score: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScoreData({ ...scoreData, [name]: value });
  };

  const handleSumbit = async (event) => {
    event.preventDefault();
    try {
      await createScore(scoreData);
    } catch (error) {
      console.error(error);
    }

    navigate('/');
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
          reqiredValue={scoreData.firstName}
        />
        <CustomInput
          label={'Last name'}
          handleChange={handleChange}
          name={'lastName'}
          defaultValue={'Type Here...'}
          type={'text'}
          reqiredValue={scoreData.lastName}
        />
        <CustomInput
          label={'Score'}
          handleChange={handleChange}
          name={'score'}
          defaultValue={'0'}
          type={'number'}
          reqiredValue={scoreData.score}
        />
        <CustomButton useCase={pageFocus} setPageFocus={setPageFocus}>
          Submit
        </CustomButton>
      </form>
    </div>
  );
}

export default AddScore;
