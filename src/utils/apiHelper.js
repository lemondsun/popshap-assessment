import { db } from './firebase/firebase.utils';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export const createScore = async (scoreData) => {
  try {
    await addDoc(collection(db, 'scores'), {
      firstName: scoreData.firstName,
      lastName: scoreData.lastName,
      scores: scoreData.score
    });
  } catch (error) {
    console.error('Error adding document', error);
  }
};

export const getScores = async () => {
  let scores = [];
  const data = await getDocs(collection(db, 'scores'));
  data.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    scores.push(doc.data());
  });
  return scores;
};
