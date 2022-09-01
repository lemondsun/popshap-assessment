import { db } from './firebase/firebase.utils';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export const createScore = async (score) => {
  try {
    const docRef = await addDoc(collection(db, 'scores'), {
      firstName: score.firstName,
      lastName: score.lastName
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document', error);
  }
};

export const getScores = async () => {
  let scores = [];
  const data = await getDocs(collection(db, 'scores'));
  data.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
    scores.push(doc.data());
  });
  return scores;
};
