import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then((results) => {
      console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
