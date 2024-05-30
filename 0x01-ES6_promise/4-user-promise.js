export default function signUpUser(firstName, lastName) {
  const res = {
    firstName,
    lastName,
  };
  return Promise.resolve(res);
}
